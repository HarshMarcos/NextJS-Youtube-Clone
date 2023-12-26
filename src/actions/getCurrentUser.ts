import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/vendor/db";
import { getServerSession } from "next-auth";

export default async function getCurrenUser() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return null;
    }

    const currUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    return currUser;
  } catch (error: any) {
    return null;
  }
}

//Next -> https://next-auth.js.org/configuration/nextjs
