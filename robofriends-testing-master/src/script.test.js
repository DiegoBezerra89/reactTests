const googleSearch = require("./script");

const dbMock = [
  "cat.com",
  "dog.com",
  "mydog.com",
  "mycatandmydog.com",
  "dogwithlasers.com",
  "flowers.com",
  "dogwithclaws.com",
];

describe("googleSearch", () => {
  //to group a test, making easier to find errors
  it("Testing googleSearch return", () => {
    expect(googleSearch("cat", dbMock)).toEqual([
      "cat.com",
      "mycatandmydog.com",
    ]);
    expect(googleSearch("foo", dbMock)).toEqual([]);
  });

  it("Works with undefined and null values", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("Does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
