import express from "express";
import {
  getAllRooms,
  getAllCustomers,
  bookRoom,
  updateRoomInfo,
  createRoom,
} from "../helper.js";

var router = express.Router();

router.route("/create-room").post(async (req, res) => {
  const data = req.body;
  const filter = req.query;
  const allrooms = await getAllRooms(filter);

  var alreadyExist = false;
  for (let i = 0; i < allrooms.length; i++) {
    if (allrooms[i].roomID == data.roomID) {
      alreadyExist = true;
      break;
    }
  }
  if (alreadyExist) {
    res.send({
      message:
        "A room with this roomID already exists. Please enter a unique roomID.",
    });
  } else {
    const createdRoom = await createRoom(data);
    res.send(createdRoom);
  }
});

router.route("/all-rooms").get(async (req, res) => {
  const filter = req.query;
  const allRooms = await getAllRooms(filter);
  res.send(allRooms);
});

router.route("/all-customers").get(async (req, res) => {
  const filter = req.query;
  const allCustomers = await getAllCustomers(filter);
  res.send(allCustomers);
});

router.route("/book-room").get(async (req, res) => {
  const data = req.body;
  const filter = req.query;
  const customer = data.name;
  const roomID = req.body.roomID;
  const time = req.body.duration;
  const date = req.body.date;
  const allRooms = await getAllRooms(filter);

  var isAvailable = true;
  for (let i = 0; i < allRooms.length; i++) {
    for (let j = 0; j < allRooms[i].bookedHours.length; j++) {
      if (
        allRooms[i].roomID == roomID &&
        allRooms[i].bookedHours[j].time == time &&
        allRooms[i].bookedHours[j].date == date
      ) {
        isAvailable = false;
        break;
      }
    }
  }
  if (isAvailable) {
    await updateRoomInfo(roomID, customer, time, date);
    const bookingInfo = await bookRoom(data);
    res.send(bookingInfo);
  } else {
    res.send("The slot is not available.");
  }
});

export const bookingRouter = router;
