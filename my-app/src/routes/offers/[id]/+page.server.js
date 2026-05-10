import db from "$lib/db.js";

export async function load({ params }) {
  const offer = await db.getOffer(params.id);

  return {
    offer,
  };
}
