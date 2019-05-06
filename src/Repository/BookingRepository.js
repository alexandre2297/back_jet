const moment = require("moment");

module.exports = class {
  constructor(db) {
    this.db = db;
  }

  retrieveAvailablesJetpacks(stDate, enDate) {
    let jetpacks = this.db.get("jetpacks").value();
    let bookingsdb = this.db.get("bookings").value();

    if (!jetpacks) {
      return null;
    } else if (!bookingsdb && (!stDate || !enDate)) {
      return jetpacks;
    } else if (bookingsdb && (!stDate || !enDate)) {
      return jetpacks.filter(x => !bookingsdb.find(a => a.jetpack_id === x.id));
    } else {
      return jetpacks.filter(x =>
        bookingsdb.find(
          a =>
            a.jetpack_id === x.id &&
            moment(a.start_date).isAfter(moment(stDate)) == true &&
            moment(a.end_date).isBefore(moment(enDate))
        )
      );
    }
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

    var bookExists = this.db
      .get("bookings")
      .find({ jetpack_id: booking.jetpackId });

    if (bookExists !== undefined && bookExists.value() !== undefined) {
      throw "A booking for this jetpack already exists";
    }

    return this.db
      .get("bookings")
      .push(booking.toJson())
      .write();
  }
};
