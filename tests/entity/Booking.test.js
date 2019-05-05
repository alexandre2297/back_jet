const Booking = require("../../src/Entity/Booking");
describe("Booking toJson", function() {
  test("Test toJson", () => {
    let book = new Booking();
    book.jetpackId = "1938232";
    book.startDate = "2018-04-14";
    book.endDate = "2019-02-01";
    expect(book.toJson()).toMatchObject({
      jetpack_id: "1938232",
      start_date: "Sat, 14 Apr 2018 00:00:00 GMT",
      end_date: "Fri, 01 Feb 2019 00:00:00 GMT"
    });
  });
});
