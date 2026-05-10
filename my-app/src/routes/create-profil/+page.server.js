import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

export const actions = {
  create: async ({ request, cookies }) => {
    const data = await request.formData();

    const user = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      birthday: data.get("birthday"),
      email: data.get("email"),
      phone: data.get("phone"),
      canton: data.get("canton"),
      municipality: data.get("municipality"),
      roles: ["customer"],
      interestedSports: [
        { sport: data.get("sport1"), level: data.get("level1") },
        { sport: data.get("sport2"), level: data.get("level2") },
        { sport: data.get("sport3"), level: data.get("level3") },
      ],
    };

    if (
      !user.firstname ||
      !user.lastname ||
      !user.birthday ||
      !user.email ||
      !user.phone ||
      !user.canton ||
      !user.municipality
    ) {
      return fail(400, {
        message: "Bitte füllen Sie alle Pflichtfelder aus.",
      });
    }

    const userId = await db.createUser(user);

    if (!userId) {
      return fail(500, {
        message: "Das Profil konnte nicht gespeichert werden.",
      });
    }

    cookies.set("userId", userId, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    throw redirect(303, "/offers?profileCreated=true");
  },
};
