const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/jetpacks/edit")
  .post(require("./controller/Jetpack/UpdateJetpackController"));
app
  .route("/jetpacks/:id?")
  .get(require("./controller/Jetpack/GetJetpackController"))
  .post(require("./controller/Jetpack/CreateJetpackController"));
app
  .route("/bookings/:id?")
  .post(require("./controller/Booking/BookingController"));

app.listen(3000, function() {
  console.log("Server listening on port 3000!");
});
