import db from "$lib/db.js";

export async function load({ url }) {
  const bookingId = url.searchParams.get("bookingId");

  const booking = await db.getBooking(bookingId);

  return {
    booking
  };
}