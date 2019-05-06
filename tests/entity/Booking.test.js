const Booking = require("../../src/Entity/Booking");
describe("Booking toJson", function() {
  test("Test toJson", () => {
    let book = new Booking();
    book.jetpackId = "1938232";
    book.startDate = "2018-04-14";
    book.endDate = "2019-02-01";
    expect(book.toJson()).toMatchObject({
      jetpack_id: "1938232",
      start_date: "2018-04-14",
      end_date: "2019-02-01"
    });
  });
});
