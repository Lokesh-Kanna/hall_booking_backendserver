import { client } from "./index.js";

async function createRoom(data) {
  return await client.db("HallBooking").collection("halls").insertOne(data);
}

async function getAllRooms(filter) {
  return await client
    .db("HallBooking")
    .collection("halls")
    .find(filter)
    .toArray();
}

async function getAllCustomers(filter) {
  return await client
    .db("HallBooking")
    .collection("customers")
    .find(filter)
    .toArray();
}

async function bookRoom(data) {
  return await client.db("HallBooking").collection("customers").insertOne(data);
}

// async function updateRoomInfo(roomID, customer, time) {
//   return await client
//     .db("HallBooking")
//     .collection("halls")
//     .updateOne({ roomID: roomID }, { $push: { bookedHours: time } });
// }

async function updateRoomInfo(roomID, customer, time, date) {
  return await client
    .db("HallBooking")
    .collection("halls")
    .updateOne(
      { roomID: roomID },
      {
        $push: {
          bookedHours: {
            roomID: roomID,
            customer: customer,
            time: time,
            date: date,
          },
        },
      }
    );
}

export { createRoom, getAllRooms, getAllCustomers, bookRoom, updateRoomInfo };
