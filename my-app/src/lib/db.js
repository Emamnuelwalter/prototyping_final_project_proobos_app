import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("proobosapp"); //database

// Wandelt MongoDB ObjectIds in Strings um
function convertId(document) {
  if (!document) return null;

  if (document._id && typeof document._id !== "string") {
    document._id = document._id.toString();
  }

  return document;
}

// Unterstützt sowohl echte ObjectIds als auch Mock-IDs wie "offer_001"
function createIdQuery(id) {
  if (ObjectId.isValid(id) && id.length === 24) {
    return { _id: new ObjectId(id) };
  }

  return { _id: id };
}

// Users / Profile

// Get user by id
async function getUser(id) {
  let user = null;

  try {
    const collection = db.collection("users");
    const query = createIdQuery(id);

    user = await collection.findOne(query);

    if (!user) {
      console.log("No user with id " + id);
    } else {
      user = convertId(user);
    }
  } catch (error) {
    console.log(error.message);
  }

  return user;
}

// Create user profile
// Example user object:
/*
{
  firstName: "Mark",
  lastName: "Meier",
  email: "mark.meier@email.ch",
  phone: "+41 79 123 45 67",
  canton: "Zürich",
  municipality: "Winterthur",
  roles: ["customer"],
  interestedSports: [
    { sport: "Krafttraining", level: "Anfänger" },
    { sport: "Tennis", level: "Mittel" },
    { sport: "Schwimmen", level: "Anfänger" }
  ]
}
*/
async function createUser(user) {
  try {
    const collection = db.collection("users");

    user.roles = ["customer"];
    user.createdAt = new Date().toISOString();
    user.isMock = false;

    const result = await collection.insertOne(user);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }

  return null;
}

// Sports

// Get all sports for the sports catalog
async function getSports() {
  return ["Krafttraining", "Tennis", "Schwimmen", "Boxen", "Yoga", "Golf"];
}

// Training Offers

// Get all offers, optional filtered by sport
async function getOffers(sport = null) {
  let offers = [];

  try {
    const collection = db.collection("trainingOffers");

    const query = sport ? { sport: sport } : {};

    offers = await collection.find(query).toArray();

    for (const offer of offers) {
      convertId(offer);

      const trainer = await db.collection("users").findOne({
        _id: offer.trainerId,
      });

      const location = await db.collection("trainingLocations").findOne({
        _id: offer.locationId,
      });

      offer.trainer = trainer;
      offer.location = location;
    }
  } catch (error) {
    console.log(error.message);
  }

  return offers;
}

// Get offer by id including trainer and location
async function getOffer(id) {
  let offer = null;

  try {
    const collection = db.collection("trainingOffers");
    const query = createIdQuery(id);

    offer = await collection.findOne(query);

    if (!offer) {
      console.log("No offer with id " + id);
      return null;
    }

    offer = convertId(offer);

    // Trainer ergänzen
    const usersCollection = db.collection("users");
    const trainer = await usersCollection.findOne(
      createIdQuery(offer.trainerId),
    );
    offer.trainer = convertId(trainer);

    // Standort ergänzen
    const locationsCollection = db.collection("trainingLocations");
    const location = await locationsCollection.findOne(
      createIdQuery(offer.locationId),
    );
    offer.location = convertId(location);
  } catch (error) {
    console.log(error.message);
  }

  return offer;
}

// Bookings

// Create booking
// Example booking object:
/*
{
  customerId: "user_001",
  offerId: "offer_001",
  locationId: "location_009",
  date: "2026-04-26",
  startTime: "10:00",
  endTime: "11:00"
}
*/
async function createBooking(booking) {
  try {
    const offersCollection = db.collection("trainingOffers");
    const offer = await offersCollection.findOne(
      createIdQuery(booking.offerId),
    );

    if (!offer) {
      console.log("No offer with id " + booking.offerId);
      return null;
    }

    const newBooking = {
      customerId: booking.customerId,
      trainerId: offer.trainerId,
      offerId: booking.offerId,
      locationId: booking.locationId || offer.locationId,
      requestedLocation: null,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      repeat: booking.repeat || "none",
      status: "confirmed", // Mindestumfang: direkt bestätigt
      price: offer.pricePerHour,
      currency: offer.currency,
      createdAt: new Date().toISOString(),
      confirmedAt: new Date().toISOString(),
      isMock: false,
    };

    const bookingsCollection = db.collection("bookings");
    const result = await bookingsCollection.insertOne(newBooking);

    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }

  return null;
}

// Get booking by id including offer, trainer and location
async function getBooking(id) {
  let booking = null;

  try {
    const collection = db.collection("bookings");
    booking = await collection.findOne(createIdQuery(id));

    if (!booking) {
      return null;
    }

    convertId(booking);

    const offer = await db.collection("trainingOffers").findOne({
      _id: booking.offerId,
    });

    const trainer = await db.collection("users").findOne({
      _id: booking.trainerId,
    });

    const location = await db.collection("trainingLocations").findOne({
      _id: booking.locationId,
    });

    booking.offer = offer;
    booking.trainer = trainer;
    booking.location = location;
  } catch (error) {
    console.log(error.message);
  }

  return booking;
}

// Get all bookings of one user
async function getBookingsByUser(userId) {
  let bookings = [];

  try {
    const collection = db.collection("bookings");

    bookings = await collection.find({
      customerId: userId
    }).toArray();

    for (const booking of bookings) {
      convertId(booking);

      const offer = await db.collection("trainingOffers").findOne({
        _id: booking.offerId
      });

      const trainer = await db.collection("users").findOne({
        _id: booking.trainerId
      });

      const location = await db.collection("trainingLocations").findOne({
        _id: booking.locationId
      });

      booking.offer = offer;
      booking.trainer = trainer;
      booking.location = location;
    }
  } catch (error) {
    console.log(error.message);
  }

  return bookings;
}

// Training Locations

// Get all training locations
async function getTrainingLocations() {
  let locations = [];

  try {
    const collection = db.collection("trainingLocations");

    locations = await collection.find({}).toArray();

    locations.forEach((location) => {
      convertId(location);
    });
  } catch (error) {
    console.log(error.message);
  }

  return locations;
}

// Get locations by sport
async function getTrainingLocationsBySport(sport) {
  let locations = [];

  try {
    const collection = db.collection("trainingLocations");
    const query = { sports: sport };

    locations = await collection.find(query).toArray();

    locations.forEach((location) => {
      convertId(location);
    });
  } catch (error) {
    console.log(error.message);
  }

  return locations;
}
// Get confirmed bookings for one offer
async function getBookingsByOffer(offerId) {
  let bookings = [];

  try {
    const collection = db.collection("bookings");

    bookings = await collection
      .find({
        offerId: offerId,
        status: "confirmed",
      })
      .toArray();

    bookings.forEach((booking) => {
      convertId(booking);
    });
  } catch (error) {
    console.log(error.message);
  }

  return bookings;
}

async function deleteUser(userId) {
  try {
    const users = db.collection("users");
    const bookings = db.collection("bookings");

    await bookings.deleteMany({ customerId: userId });

    const result = await users.deleteOne(createIdQuery(userId));

    if (result.deletedCount === 0) {
      console.log("No user with id " + userId);
      return null;
    }

    return userId;
  } catch (error) {
    console.log(error.message);
  }

  return null;
}

async function deleteBooking(bookingId, userId) {
  try {
    const collection = db.collection("bookings");

    const query = createIdQuery(bookingId);
    query.customerId = userId;

    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("Booking could not be deleted");
      return null;
    }

    return bookingId;
  } catch (error) {
    console.log(error.message);
  }

  return null;
}
// Export

export default {
  getUser,
  createUser,
  getSports,
  getOffers,
  getOffer,
  deleteUser,
  deleteBooking,
  createBooking,
  getBooking,
  getBookingsByOffer,
  getBookingsByUser,
  getTrainingLocations,
  getTrainingLocationsBySport,
};
