module.exports = class {
  constructor(db) {
    this.db = db;
  }

  book(booking) {
    if (booking == undefined) {
      throw "Booking object is undefined";
    }

    if (
      booking.jetpackId == null ||
      booking.startDate == null ||
      booking.endDate == null
    ) {
      throw "Booking object is missing information";
    }

    var bookAlreadyExists = this.db
      .get("bookings")
      .find({ jetpack_id: booking.jetpackId });

    if (
      bookAlreadyExists !== undefined &&
      bookAlreadyExists.value() !== undefined
    ) {
      throw "A booking for this jetpack already exists";
    }

    return this.db
      .get("bookings")
      .push(booking.toJson())
      .write();
  }
};
