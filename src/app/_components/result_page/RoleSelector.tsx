"use client";

import { ChangeEvent, useState } from "react";
import { ReviewList } from "..";
import { Prisma } from "@prisma/client";

interface RoleI {
  roles: string[];
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

const RoleSelector = ({ roles, reviews }: RoleI) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  function HandleSelection(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedRole(e.target.value);
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <select
            name="role"
            id="role"
            onChange={(e) => HandleSelection(e)}
            className="rounded-lg p-1 overflow-auto"
          >
            {roles.map((role) => {
              return (
                <option value={role} key={role}>
                  {role}
                </option>
              );
            })}
          </select>
          <ReviewList role={selectedRole} reviews={reviews} />
        </>
      ) : null}
    </div>
  );
};

export default RoleSelector;
