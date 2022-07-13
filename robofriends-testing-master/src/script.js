const googleDatabase = [
  "cats.com",
  "dogs.com",
  "mycat.com",
  "flowers.com",
  "animals.com",
  "cars.com",
  "myfavouritecats.com",
  "myfavouritecats2.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
