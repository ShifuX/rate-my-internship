import { redirect } from "next/navigation";
import {
  NavBar,
  RatingDistribution,
  RatingView,
  RoleSelector,
} from "../../_components";
import prisma from "../../db";

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

function RemoveDuplicateRoles(roles: Array<string>): Array<string> {
  let map = new Map<string, string>();
  let cleanRoles: Array<string> = [];

  roles.forEach((role) => {
    if (!map.has(role)) {
      map.set(role, role);
    }
  });

  map.forEach((val, key) => {
    cleanRoles.push(val);
  });

  return cleanRoles;
}

const ResultPage = async ({ params }: { params: { id: string } }) => {
  const company = await getCompany(params.id);
  //console.log(company);
  if (company == null) {
    redirect(`/notfound/${params.id}`);
  }

  let roles = company.reviews.map((review) => review.role);
  roles = RemoveDuplicateRoles(roles);

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
      <div className="grid grid-cols-2 desktop2k:gap-x-48 desktop1080:gap-x-40 laptop:gap-x-108 tablet:gap-x-80 pl-80 laptop:pl-32 tablet:pl-10 pt-20 w-3/5">
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

      <div className="pl-80 laptop:pl-32 tablet:pl-10 pb-6 mt-20">
        <RoleSelector roles={roles} reviews={company.reviews} />
      </div>
    </div>
  );
};

export default ResultPage;
