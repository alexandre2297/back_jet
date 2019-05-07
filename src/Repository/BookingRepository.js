module.exports = class {
  constructor(db) {
    this.db = db;
  }


  retrieveAvailablesJetpacks(stDate, enDate) {
    let jetpacks = this.db.get("jetpacks").value();
    let bookingsdb = this.db.get("bookings").value();

    if (!jetpacks) {
      return null;
    } else if (!bookingsdb) {
      return jetpacks;
    } else if (bookingsdb) {
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
    if (!booking) {
      throw "Booking object is undefined";
    }

    if (
      !booking.jetpackId ||
      !booking.startDate ||
      !booking.endDate
    ) {
      throw "Booking object is missing information";
    }


    const bookExists = this.db
      .get("bookings")
      .filter(b => b.jetpackId===booking.jetpackId && (moment(b.end_date).isBefore(moment(booking.startDate)) 
      || moment(booking.endDate).isBefore(moment(b.start_date)))) 


    if (bookExists && bookExists.value()) {
      throw "A booking for this jetpack already exists";
    }

    return this.db
      .get("bookings")
      .push(booking.toJson())
      .write();
  }
};
