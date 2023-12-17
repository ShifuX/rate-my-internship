import {
  PayCard,
  RateCard,
  RetakeCard,
  ReviewCard,
  SubmitCard,
  TextCard,
} from "../../_components";

async function addReview(data: FormData) {
  "use server";
  // submit to db
  console.log(data.get("rateBoxLearn")?.toString());
}

const page = ({ params }: { params: { id: string } }) => {
  const companyName = params.id;
  return (
    <div className="h-screen">
      <form
        action={addReview}
        className="w-full flex flex-col space-y-8 pt-44 justify-center content-center items-center pb-20"
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
        <RateCard
          labelName="Rate how challenging the internship was"
          inputID="rateBoxChallenge"
        />
        <TextCard textLabel="Role" inputID="Role" placeHolder="Role Name" />
        <RetakeCard textLabel="Would you intern here again" inputID="checked" />
        <PayCard textLabel="Your hourly pay" inputID="pay" placeHolder="0.00" />
        <ReviewCard textLabel="Write your review" inputID="review" />
        <SubmitCard />
      </form>
    </div>
  );
};

export default page;
