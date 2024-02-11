import * as redis from "redis";
import prisma from "./db";

const redisClient = redis.createClient({ url: "" });
await redisClient.connect();

const CACHE_EXPIRATION = 30;

export async function GetCompaniesFromCache(): Promise<any> {
  let cache = await redisClient.get("companies");

  if (cache != null) {
    console.log("CACHE HIT");
    return JSON.parse(cache);
  } else {
    const companies = await prisma.company.findMany({
      include: {
        reviews: {
          where: {
            moderator_reviewed: true,
          },
        },
      },
    });

    await redisClient.setEx(
      "companies",
      CACHE_EXPIRATION,
      JSON.stringify(companies)
    );

    cache = await redisClient.get("companies");

    console.log("CACHE MISS");
  }

  if (cache) {
    return JSON.parse(cache);
  }
}

export async function GetCompanyFromCache(companyName: string) {
  let companies = await GetCompaniesFromCache();

  let companyData = companies.filter(
    (company: any) => company.name === companyName
  );

  return companyData[0];
}
