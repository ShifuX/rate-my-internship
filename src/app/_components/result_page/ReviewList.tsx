import { Prisma } from "@prisma/client";
import { ReviewDisplayCard } from "..";

interface RoleI {
  role: string;
  reviews: {
    id: string;
    moderator_reviewed: boolean;
    total_rating: Prisma.Decimal;
    learn_rating: Prisma.Decimal;
    fun_rating: Prisma.Decimal;
    challenge_rating: Prisma.Decimal;
    pay: Prisma.Decimal;
    review: string;
    role: string;
    would_retake: boolean;
    created_date: Date;
    companyID: string;
  }[];
}

const ReviewList = ({ role, reviews }: RoleI) => {
  return (
    <div>
      {reviews.map((review) => {
        return review.role === role ? (
          <ReviewDisplayCard
            would_retake={review.would_retake}
            pay={review.pay.toString()}
            role={review.role}
            date={review.created_date}
            review={review.review}
            overallRating={review.total_rating.toString()}
            challengeRating={review.challenge_rating.toString()}
            key={review.id}
          />
        ) : null;
      })}
    </div>
  );
};

export default ReviewList;
