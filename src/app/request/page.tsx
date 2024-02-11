import { redirect } from "next/navigation";
import { TextCard } from "../_components";
import prisma from "../db";

async function companyExist(company: string) {
  const res = await prisma.companyAddRequest.findUnique({
    where: {
      name: company,
    },
  });

  if (!res) return false;
  return true;
}

async function createCompanyRequest(data: FormData) {
  "use server";
  const companyName = data.get("companyName")?.toString();

  if (!companyName) return;

  // check if exists already
  const exist = await companyExist(companyName);

  // if exist update the count, else create the record
  if (exist) {
    await prisma.companyAddRequest.update({
      where: {
        name: companyName,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });

    // temp
    // if (updatedRecord.count > 0) {
    //   // create company
    //   await prisma.company.create({
    //     data: {
    //       name: companyName,
    //       logo_path: "/RMI_logo_snip.JPG",
    //     },
    //   });

    //   // update request record
    //   await prisma.companyAddRequest.update({
    //     where: {
    //       name: companyName,
    //     },
    //     data: {
    //       added: true,
    //     },
    //   });
    // }
  } else {
    await prisma.companyAddRequest.create({
      data: {
        name: companyName,
        count: 1,
      },
    });
  }

  redirect("/");
  //console.log(companyName);
}

const RequestPage = () => {
  return (
    <div>
      <form
        action={createCompanyRequest}
        className="w-full flex content-center justify-center pt-44"
      >
        <TextCard
          textLabel="Company Name"
          inputID="companyName"
          placeHolder="Company Name"
        />
      </form>
    </div>
  );
};

export default RequestPage;
