import prisma from "../../db";
import {
  ChallengeRateCard,
  FileCard,
  Footer,
  NavBar,
  PayCard,
  RateCard,
  RetakeCard,
  ReviewCard,
  SubmitCard,
  TextCard,
} from "../../_components";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";

const page = ({ params }: { params: { id: string } }) => {
  const companyName = params.id;

  async function addReview(data: FormData) {
    "use server";
    // submit to db
    const total_rating = data.get("rateBoxOverall")?.toString();
    const learn_rating = data.get("rateBoxLearn")?.toString();
    const fun_rating = data.get("rateBoxFun")?.toString();
    const challenge_rating = data.get("rateBoxChallenge")?.toString();
    const pay = data.get("pay")?.toString();
    const review = data.get("review")?.toString();
    const role = data.get("Role")?.toString();
    const retake = data.get("checked")?.toString();
    const would_retake: boolean = retake === "1" ? true : false;
    const pdf = data.get("pdf") as File;
    const arrayBuffer = await pdf.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    //console.log(review);
    if (
      !total_rating ||
      !learn_rating ||
      !fun_rating ||
      !challenge_rating ||
      !pay ||
      !review ||
      !role
    ) {
      return;
    }

    await prisma.reviews.create({
      data: {
        companyID: companyName,
        challenge_rating,
        fun_rating,
        learn_rating,
        total_rating,
        pay: new Prisma.Decimal(pay),
        review,
        role,
        would_retake,
        pdf: Buffer.from(buffer),
      },
    });

    //console.log("Submitted");
    redirect(`/resultpage/${companyName}`);
  }

  return (
    <div className="phone:relative">
      <NavBar />
      <div className="phone:inline desktop2k:hidden desktop1080:hidden laptop:hidden tablet:hidden font-medium">
        Rating is currently unavailable on mobile devices, please use a
        computer, laptop, or tablet
      </div>
      <form
        action={addReview}
        className="w-full flex flex-col space-y-8 pt-20 justify-center content-center items-center pb-48 phone:invisible desktop2k:visible
         desktop1080:visible laptop:visible tablet:visible"
      >
        <RateCard
          labelName="Overall internship rating"
          inputID="rateBoxOverall"
        />
        <RateCard
          labelName="Rate how fun your internship was"
          inputID="rateBoxFun"
        />
        <RateCard
          labelName="Rate how much you learned"
          inputID="rateBoxLearn"
        />
        <ChallengeRateCard
          labelName="Rate how challenging the internship was"
          inputID="rateBoxChallenge"
        />
        <RetakeCard textLabel="Would you intern here again" inputID="checked" />
        <TextCard
          textLabel="Role (Make sure the name matches your offer letter)"
          inputID="Role"
          placeHolder="Role Name"
        />
        <PayCard textLabel="Your hourly pay" inputID="pay" placeHolder="0.00" />
        <FileCard textLabel="Offer letter" inputID="pdf" />
        <ReviewCard textLabel="Write your review" inputID="review" />
        <SubmitCard />
      </form>
      <Footer />
    </div>
  );
};

export default page;
