import db from "$lib/db.js";

export async function load({ cookies, url }) {
  const userId = cookies.get("userId");
  const profileCreated = url.searchParams.get("profileCreated") === "true";

  const user = userId ? await db.getUser(userId) : null;
  const offers = await db.getOffers();

  let matchingOffers = [];
  let recommendedOffers = [];

  if (user) {
    matchingOffers = offers.filter((offer) => {
      return user.interestedSports.some((interest) => {
        return (
          offer.sport === interest.sport &&
          offer.levels &&
          offer.levels.includes(interest.level)
        );
      });
    });

    recommendedOffers = offers.filter((offer) => {
      return !matchingOffers.includes(offer);
    });
  } else {
    recommendedOffers = offers;
  }

  return {
    user,
    offers,
    matchingOffers,
    recommendedOffers,
    profileCreated,
  };
}
