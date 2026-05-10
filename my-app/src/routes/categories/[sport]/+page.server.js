import db from "$lib/db.js";

export async function load({ params }) {
  const sport = decodeURIComponent(params.sport);
  const offers = await db.getOffers(sport);

  return {
    sport,
    offers
  };
}