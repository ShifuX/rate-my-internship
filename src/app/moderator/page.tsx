import { redirect } from "next/navigation";
import ReviewTabs from "../_components/moderator/ReviewTabs";
import prisma from "../db";
import { getServerSession } from "next-auth";
import { SignOut } from "../_components";
import RequestsCard from "../_components/moderator/RequestsCard";

// interface RequestsI {
//   id: string;
//   name: string;
//   count: number;
//   added: boolean;
//   created_date: Date;
// }
// [];

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

async function AddRequest(name: string) {
  "use server";
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
            <div className="pb-5">
              <RequestsCard
                name={request.name}
                count={request.count}
                date={request.created_date}
                AddRequest={AddRequest}
                key={request.id}
              />
            </div>
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
