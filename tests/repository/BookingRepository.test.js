const Repository = require("../../src/Repository/BookingRepository");
const Booking = require("../../src/Entity/Booking");

describe("book a jetpack", function() {
  test("Test booking", () => {
    let dbMock = {
      get: jest.fn(),
      push: jest.fn(),
      write: jest.fn(),
      filter: jest.fn()
    };
    const book = new Booking();
    book.jetpackId = "1";
    book.startDate = "2018-12-17";
    book.endDate = "2019-02-10";

    dbMock.get.mockReturnValue(dbMock);
    dbMock.push.mockReturnValue(dbMock);
    dbMock.write.mockReturnValue(dbMock);
    dbMock.filter.mockReturnValue(null);
    
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

  test("Retrieve availables jetpacks", () => {
    let dbMock = {
      get: jest.fn(),
      filter: jest.fn(),
      find: jest.fn(),
      value: jest.fn()
    };

    dbMock.get.mockReturnValue(dbMock);
    dbMock.find.mockReturnValue(dbMock);
    dbMock.value.mockReturnValue(null);
    dbMock.filter.mockReturnValue(null);

    const repository = new Repository(dbMock);
    expect(dbMock.filter.mock.calls.length).toBe(0);
    expect(dbMock.find.mock.calls.length).toBe(0);

    expect(repository.retrieveAvailablesJetpacks(null, null)).toEqual(null);


  });
});
