import { redirect } from "next/navigation";
import prisma from "../../db";
interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
  placeHolder: string | undefined;
}

async function companyExist(company: string) {
  const res = await prisma.companyAddRequest.findUnique({
    where: {
      name: company,
    },
  });

  if (!res) return false;
  return true;
}

const TextCard = async ({ textLabel, inputID, placeHolder }: PropI) => {
  async function createCompanyRequest(data: FormData) {
    "use server";
    const companyName = data.get(`${inputID}`)?.toString();

    if (!companyName) return;

    // check if exists already
    const exist = await companyExist(companyName);

    // if exist update the count, else create the record
    if (exist) {
      const updatedRecord = await prisma.companyAddRequest.update({
        where: {
          name: companyName,
        },
        data: {
          count: {
            increment: 1,
          },
        },
      });

      // Will remove this since cant dynamically know the logo path or keep it and add pics manually later...
      // Adds a company if more than 10 request are submitted
      if (updatedRecord.count > 10) {
        // create company
        await prisma.company.create({
          data: {
            name: companyName,
            logo_path: "/comming-soon.jpg",
          },
        });

        // update request record
        await prisma.companyAddRequest.update({
          where: {
            name: companyName,
          },
          data: {
            added: true,
          },
        });
      }
    } else {
      await prisma.companyAddRequest.create({
        data: {
          name: companyName,
          count: 1,
        },
      });
    }

    redirect("/");
    //console.log(companyName);
  }

  return (
    <div className="w-1/4 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <form action={createCompanyRequest} className="pl-48 pt-8">
        <input
          type="text"
          name={inputID}
          placeholder={placeHolder}
          className="w-52 h-12 rounded-3xl border-2 text-center"
        />
      </form>
    </div>
  );
};

export default TextCard;
