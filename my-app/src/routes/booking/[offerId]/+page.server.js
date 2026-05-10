import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

export async function load({ params }) {
  const offer = await db.getOffer(params.offerId);
  const bookings = await db.getBookingsByOffer(params.offerId);

  return {
    offer,
    bookings
  };
}

export const actions = {
  create: async ({ request, cookies, params }) => {
    const userId = cookies.get("userId");

    if (!userId) {
      throw redirect(303, "/create-profil");
    }

    const data = await request.formData();

    const booking = {
      customerId: userId,
      offerId: params.offerId,
      locationId: data.get("locationId"),
      date: data.get("date"),
      startTime: data.get("startTime"),
      endTime: data.get("endTime")
    };

    if (!booking.date || !booking.startTime || !booking.endTime) {
      return fail(400, {
        message: "Bitte wählen Sie einen Termin aus."
      });
    }

    const bookings = await db.getBookingsByOffer(params.offerId);

    const alreadyBooked = bookings.some((item) =>
      item.date === booking.date &&
      item.startTime === booking.startTime &&
      item.endTime === booking.endTime
    );

    if (alreadyBooked) {
      return fail(400, {
        message: "Dieser Termin ist bereits gebucht. Bitte wählen Sie einen anderen Termin."
      });
    }

    const bookingId = await db.createBooking(booking);

    if (!bookingId) {
      return fail(500, {
        message: "Die Buchung konnte nicht gespeichert werden."
      });
    }

    throw redirect(303, `/booking/success?bookingId=${bookingId}`);
  }
};