API url - https://hall-booking-server.herokuapp.com/

**Creaating Rooms:-**
Use the following endpoint to create a new room. An example data schema is given below.
Endpoint: /rooms/create-rooms 

Example data schema:
{
        "roomID": "Room-103",
        "capacity": "50",
        "amenities": [
            "Stage",
            "Decoration"
        ],
        "bookingHours": [
            "8:00am-9:00am",
            "9:00am-10:00am",
            "10:00am-11:00am",
            "11:00am-12:00pm",
            "12:00pm-01:00pm",
            "01:00pm-02:00pm",
            "02:00pm-3:00pm",
            "03:00pm-4:00pm",
            "04:00pm-5:00pm",
            "05:00pm-6:00pm",
            "06:00pm-7:00pm"
        ],
        "bookedHours": [],
        "price": "₹1000 per hour"
    }
    
**Get all rooms:**
Use the following endpoint to get the details of all the existing rooms.
Emdpoint: /rooms/all-rooms


**Get all customers:**
Use the following endpoint to get the details of all the existing rooms.
Emdpoint: /rooms/all-customers


**Book a room:**
Use the following endpoint to book a room. An example data schema is given below.
Endpoint: /rooms/book-room

Example schema:
{
    "name": "Karuppusamy",
    "roomID": "Room-101",
    "date": "27 Jan 2022",
    "duration": "12:00pm-01:00pm"
  }
