// Still needs to be able to take in an image to store it and auto add it to the company logo

import { redirect } from "next/navigation";
import ReviewTabs from "../_components/moderator/ReviewTabs";
import prisma from "../db";
import { getServerSession } from "next-auth";
import { SignOut } from "../_components";
import RequestsCard from "../_components/moderator/RequestsCard";
import { GenerateUploadURL } from "@/s3";

// interface RequestsI {
//   id: string;
//   name: string;
//   count: number;
//   added: boolean;
//   created_date: Date;
// }
// [];

interface AddReqI {
  name: string;
  file: File;
}

async function getReviews() {
  return await prisma.reviews.findMany({
    where: {
      moderator_reviewed: false,
    },
  });
}

async function getRequest() {
  return await prisma.companyAddRequest.findMany({
    where: {
      added: false,
    },
  });
}

async function AddRequest({ name, file }: AddReqI) {
  "use server";

  if (file.name === "filename") return;

  // store in S3 bucket first and get the URL for the image
  // pass the url to the logo_path

  const secureURL = await GenerateUploadURL();

  await fetch(secureURL, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file,
  });

  const imageURL = secureURL.split("?")[0];
  console.log(imageURL);

  const companyAdded = await prisma.company.create({
    data: {
      name: name,
      logo_path: "/comming-soon.jpg",
    },
  });

  if (!companyAdded) {
    return;
  }

  await prisma.companyAddRequest.update({
    where: {
      name: name,
    },
    data: {
      added: true,
    },
  });
  redirect("/moderator");
}

async function DeleteRequest(name: string) {
  "use server";
  await prisma.companyAddRequest.delete({
    where: {
      name: name,
    },
  });
  redirect("/moderator");
}

async function HandleForm(data: FormData) {
  "use server";

  const file = data.get("logoFile") as File;
  const option = data.get("addOrDeleteOption")?.toString();
  let name = data.get("companyName")?.toString();

  if (file.name === "filename") return;

  if (!name || !option) return;

  name = decodeURI(name);

  // store in S3 bucket first and get the URL for the image
  // pass the url to the logo_path

  // Add
  if (option === "1") {
    const secureURL = await GenerateUploadURL();

    await fetch(secureURL, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });

    const imageURL = secureURL.split("?")[0];
    console.log(imageURL);

    const companyAdded = await prisma.company.create({
      data: {
        name: name,
        logo_path: imageURL.toString(),
      },
    });

    if (!companyAdded) {
      return;
    }

    await prisma.companyAddRequest.update({
      where: {
        name: name,
      },
      data: {
        added: true,
      },
    });
  }

  if (option === "0") {
    await prisma.companyAddRequest.delete({
      where: {
        name: name,
      },
    });
  }

  redirect("/moderator");
}

const page = async () => {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/moderatorlogin");
  }

  const reviews = await getReviews();
  const requests = await getRequest();
  return (
    <div className="p-40">
      <div>
        <SignOut />
      </div>

      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <ReviewTabs
              id={review.id}
              moderator_reviewed={review.moderator_reviewed}
              total_rating={review.total_rating.toString()}
              learn_rating={review.learn_rating.toString()}
              fun_rating={review.fun_rating.toString()}
              challenge_rating={review.challenge_rating.toString()}
              pay={review.pay.toDecimalPlaces(2).toString()}
              review={review.review}
              role={review.role}
              would_retake={review.would_retake}
              created_date={review.created_date}
              pdf={review.pdf}
              companyId={review.companyID}
              key={review.id}
            />
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          No reviews available
        </div>
      )}
      {requests.length > 0 ? (
        requests.map((request) => {
          return (
            <form action={HandleForm} className="pb-5" key={request.id}>
              <RequestsCard
                name={request.name}
                count={request.count}
                date={request.created_date}
                key={request.id}
              />
            </form>
          );
        })
      ) : (
        <div className="flex justify-center items-center">
          No requests available
        </div>
      )}
    </div>
  );
};

export default page;
