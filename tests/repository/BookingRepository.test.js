const Repository = require("../../src/Repository/BookingRepository");
const Booking = require("../../src/Entity/Booking");

describe("book a jetpack", function() {
  test("Test create", () => {
    let dbMock = {
      get: jest.fn(),
      push: jest.fn(),
      write: jest.fn(),
      find: jest.fn(),
      value: jest.fn()
    };
    const book = new Booking();
    book.jetpackId = "1";
    book.startDate = "2018-12-17";
    book.endDate = "2019-02-10";

    dbMock.get.mockReturnValue(dbMock);
    dbMock.push.mockReturnValue(dbMock);
    dbMock.write.mockReturnValue(dbMock);

    const repository = new Repository(dbMock);
    repository.book(book);
    expect(dbMock.write.mock.calls.length).toBe(1);
    expect(() => repository.book(new Booking())).toThrow(
      "Booking object is missing information"
    );
    expect(() => repository.book(undefined)).toThrow(
      "Booking object is undefined"
    );
    book.endDate = null;
    expect(() => repository.book(book)).toThrow(
      "Booking object is missing information"
    );
    book.endDate = "2019-02-10";
    book.startDate = null;
    expect(() => repository.book(book)).toThrow(
      "Booking object is missing information"
    );
  });
});
