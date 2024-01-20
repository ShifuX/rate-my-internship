import React from "react";
import DownTest from "./DownTest";
import prisma from "../../db";
import { redirect } from "next/navigation";

interface ReviewsI {
  id: string;
  moderator_reviewed: boolean;
  total_rating: string;
  learn_rating: string;
  fun_rating: string;
  challenge_rating: string;
  pay: string;
  review: string;
  role: string;
  would_retake: boolean;
  created_date: Date;
  pdf: Buffer;
  companyId: string;
}

async function ReviewedAction(id: string, companyId: string) {
  "use server";

  await prisma.reviews.update({
    where: {
      id,
    },
    data: {
      moderator_reviewed: true,
    },
  });

  await prisma.company.update({
    where: {
      name: companyId,
    },
    data: {
      review_count: {
        increment: 1,
      },
    },
  });

  redirect("/moderator");
}

async function DeletedAction(id: string) {
  "use server";

  await prisma.reviews.update({
    where: {
      id,
    },
    data: {
      pdf: Buffer.from(""),
    },
  });

  redirect("/moderator");
}

const ReviewTabs = ({
  id,
  moderator_reviewed,
  total_rating,
  learn_rating,
  fun_rating,
  challenge_rating,
  pay,
  review,
  role,
  would_retake,
  created_date,
  pdf,
  companyId,
}: ReviewsI) => {
  return (
    <div className="w-full h-52 bg-gray-100">
      <div className="flex border-2 w-full">
        <div className="border-2 p-1 w-44">moderator reviewed</div>
        <div className="border-2 p-1 w-24">total rating</div>
        <div className="border-2 p-1 w-28">learn rating</div>
        <div className="border-2 p-1 w-24">fun rating</div>
        <div className="border-2 p-1 w-36">challenge rating</div>
        <div className="border-2 p-1 w-10">pay</div>
        <div className="border-2 p-1 w-32">role</div>
        <div className="border-2 p-1 w-28">would retake</div>
        <div className="border-2 p-1 w-28">created date</div>
        <div className="border-2 p-1 w-160">review</div>
      </div>

      <div className="flex border-2 w-full">
        <div className="border-2 p-1 w-44 text-sm">
          {moderator_reviewed ? "Yes" : "No"}
        </div>
        <div className="border-2 p-1 w-24 text-sm">{total_rating}</div>
        <div className="border-2 p-1 w-28 text-sm">{learn_rating}</div>
        <div className="border-2 p-1 w-24 text-sm">{fun_rating}</div>
        <div className="border-2 p-1 w-36 text-sm">{challenge_rating}</div>
        <div className="border-2 p-1 w-10 text-sm">{pay}</div>
        <div className="border-2 p-1 w-32 text-sm">{role}</div>
        <div className="border-2 p-1 w-28 text-sm">
          {would_retake ? "Yes" : "No"}
        </div>
        <div className="border-2 p-1 w-28 text-sm">{`${created_date.getMonth()} ${created_date.getDay()}, ${created_date.getFullYear()}`}</div>
        <div className="border-2 p-1 w-160 break-words text-sm">{review}</div>
      </div>
      <div className="flex space-x-8 mt-16">
        <DownTest
          pdf={pdf}
          ReviewedAction={ReviewedAction}
          DeleteAction={DeletedAction}
          id={id}
          companyId={companyId}
          key={id}
        />
      </div>
    </div>
  );
};

export default ReviewTabs;
