const Booking = require("../../src/Entity/Booking");
const db = require("../../src/Db");
const BookingRepository = require("../../src/Repository/BookingRepository");

module.exports = (req, res) => {
  var sd = req.params.start_date;
  var ed = req.params.end_date;

  const repository = new BookingRepository(db);
  res.header("Access-Control-Allow-Origin", "*");

  var infos = repository.retrieveAvailablesJetpacks(sd, ed);

  res.status(201).send(infos);
};
