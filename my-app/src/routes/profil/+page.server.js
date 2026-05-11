import { redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

export async function load({ cookies }) {
  const userId = cookies.get("userId");

  if (!userId) {
    throw redirect(303, "/create-profil");
  }

  const user = await db.getUser(userId);

  return {
    user,
  };
}

export const actions = {
  delete: async ({ cookies }) => {
    const userId = cookies.get("userId");

    if (userId) {
      await db.deleteUser(userId);
    }

    cookies.delete("userId", {
      path: "/",
    });

    throw redirect(303, "/");
  },
};
