const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then((data) => {
    //quando rodar testes assíncronos, sempre conte as assertions, expect.assertions(n)
    //promisses precisam do return, caso contrário o teste será finalizado antes da promisse ser resolvida, o q gera um PASS falso, pois o teste falhou
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
