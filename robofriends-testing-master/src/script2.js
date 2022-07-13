const fetch = require("node-fetch");

const getPeople = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

getPeople(fetch);

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results,
  };
};

getPeopleAsync(fetch);

module.exports = {
  getPeople,
  getPeopleAsync,
};
