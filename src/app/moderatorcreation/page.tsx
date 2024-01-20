import { redirect } from "next/navigation";
import prisma from "../db";
import bcrypt from "bcrypt";

async function CreateModerator(data: FormData) {
  "use server";
  const firstName = data.get("firstName")?.toString();
  const lastName = data.get("lastName")?.toString();
  const username = data.get("username")?.toString();
  const password = data.get("password")?.toString();

  if (!firstName || !lastName || !username || !password) return;

  const usernameCheck = await prisma.moderator.findUnique({
    where: {
      username: username,
    },
  });

  if (usernameCheck) return;

  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    await prisma.moderator.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: hash,
      },
    });
  });

  redirect("/moderatorlogin");
}

const page = () => {
  return (
    <div>
      <form action={CreateModerator}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default page;
