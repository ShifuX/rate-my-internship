import { redirect } from "next/navigation";
import {
  NavBar,
  RatingDistribution,
  RatingView,
  ReviewDisplayCard,
} from "../../_components";

import prisma from "../../db";

// interface CompanyI {
//   id: string | undefined;
//   name: string | undefined;
//   logo_path: string | undefined;
//   reviews:
//     | [
//         {
//           id: string;
//           total_rating: string;
//           learn_rating: string;
//           challenge_rating: string;
//           pay: number;
//           role: string;
//           would_retake: boolean;
//           created_date: Date;
//         }
//       ]
//     | undefined;
// }

async function getCompany(company: string) {
  // logic to get company from db
  return await prisma.company.findFirst({
    where: {
      name: company,
    },
    include: {
      reviews: {
        where: {
          moderator_reviewed: true,
        },
      },
    },
  });
}

const ResultPage = async ({ params }: { params: { id: string } }) => {
  const company = await getCompany(params.id);
  console.log(company);
  if (company == null) {
    redirect("/notfound");
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 pl-80 pt-20 w-3/5">
        <RatingView company={company?.name} logo_path={company?.logo_path} />
        <RatingDistribution />
      </div>

      <div>
        {company.reviews.map((review) => {
          return (
            <ReviewDisplayCard
              would_retake={review.would_retake}
              pay={review.pay.toDecimalPlaces(2).toString()}
              role={review.role}
              date={review.created_date}
              review={review.review}
              key={review.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
