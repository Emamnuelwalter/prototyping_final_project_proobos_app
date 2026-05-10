import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

export async function load({ cookies }) {
  const userId = cookies.get("userId");

  if (!userId) {
    throw redirect(303, "/create-profil");
  }

  const bookings = await db.getBookingsByUser(userId);

  return {
    bookings
  };
}

export const actions = {
  cancel: async ({ request, cookies }) => {
    const userId = cookies.get("userId");

    if (!userId) {
      throw redirect(303, "/create-profil");
    }

    const data = await request.formData();
    const bookingId = data.get("bookingId");

    if (!bookingId) {
      return fail(400, {
        message: "Der Termin konnte nicht storniert werden."
      });
    }

    await db.deleteBooking(bookingId, userId);

    throw redirect(303, "/appointments");
  }
};