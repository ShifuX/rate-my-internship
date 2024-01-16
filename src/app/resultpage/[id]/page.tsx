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
  //console.log(company);
  if (company == null) {
    redirect(`/notfound/${params.id}`);
  }

  let averageTotalRating = 0;
  let averageChallengeRating = 0;
  let averageLearnRating = 0;
  let averageFunRating = 0;
  let averageWouldTakeAgain = 0;

  if (company.reviews.length !== 0) {
    const totalRating = company.reviews.map((review) => review.total_rating);
    const challengeRating = company.reviews.map(
      (review) => review.challenge_rating
    );
    const learnRating = company.reviews.map((review) => review.learn_rating);
    const funRating = company.reviews.map((review) => review.fun_rating);
    let countWouldTakeAgain: number = 0;

    company.reviews.forEach((review) => {
      if (review.would_retake) {
        countWouldTakeAgain++;
      }
    });

    averageWouldTakeAgain =
      (countWouldTakeAgain / company.reviews.length) * 100;

    const sumTotalRating = totalRating.reduce(
      (accumulator, currentVal) => accumulator + Number(currentVal),
      0
    );

    const sumChallengeRating = challengeRating.reduce(
      (accumulator, currentVal) => accumulator + Number(currentVal),
      0
    );

    const sumLearnRating = learnRating.reduce(
      (accumulator, currentVal) => accumulator + Number(currentVal),
      0
    );

    const sumFunRating = funRating.reduce(
      (accumulator, currentVal) => accumulator + Number(currentVal),
      0
    );

    averageTotalRating = sumTotalRating / totalRating.length;
    averageChallengeRating = sumChallengeRating / challengeRating.length;
    averageLearnRating = sumLearnRating / learnRating.length;
    averageFunRating = sumFunRating / funRating.length;
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 pl-80 pt-20 w-3/5">
        <RatingView
          company={company?.name}
          logo_path={company?.logo_path}
          totalAverage={averageTotalRating}
          challengeAverage={averageChallengeRating}
          wouldRetakeAverage={averageWouldTakeAgain}
        />
        <RatingDistribution
          overallRatingAverage={averageTotalRating.toFixed(1).toString()}
          challengeRatingOverall={averageChallengeRating.toFixed(1).toString()}
          learnRatingAverage={averageLearnRating.toFixed(1).toString()}
          funRatingAverage={averageFunRating.toFixed(1).toString()}
        />
      </div>

      <div className="pl-80 pb-6 mt-20">
        {company.reviews.map((review) => {
          return (
            <ReviewDisplayCard
              would_retake={review.would_retake}
              pay={review.pay.toDecimalPlaces(2).toString()}
              role={review.role}
              date={review.created_date}
              review={review.review}
              overallRating={review.total_rating.toString()}
              challengeRating={review.challenge_rating.toString()}
              key={review.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultPage;
