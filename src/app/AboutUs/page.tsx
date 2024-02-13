import { Footer, NavBar } from "../_components";

const page = () => {
  return (
    <div className="relative desktop2k:h-screen desktop1080:h-screen laptop:h-screen tablet:h-screen">
      <NavBar />
      <div
        className="flex flex-col space-y-10 justify-center items-center desktop2k:pt-40 desktop1080:pt-40 laptop:pt-40 tablet:pt-20 phone:pt-20
       desktop2k:pb-0 desktop1080:pb-0 laptop:pb-0 tablet:pb-40 phone:pb-40"
      >
        <h1 className="text-5xl font-bold">About Us</h1>
        <div className="w-2/5 phone:w-4/5">
          <p className="text-xl phone:text-lg">
            At Rate My Internship, our primary objective is to empower students
            in their quest to discover exceptional internship opportunities
            while simultaneously fostering a culture of improvement within
            companies. We are dedicated to facilitating an environment where
            individuals can openly share and evaluate their internship
            experiences, enabling prospective interns to make informed decisions
            about their career paths. By offering a platform for constructive
            feedback, we aim to incentivize companies to enhance their
            internship programs, thereby creating more enriching and rewarding
            experiences for future interns. Join us on our mission to
            revolutionize the internship landscape for the betterment of
            students and companies alike!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
