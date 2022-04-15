import { obtemLeiloes } from "../../src/repositorio/leilao";

jest.mock("../../src/servicos/apiLeiloes.js");

describe("repositorio/leilao", () => {
  describe("obtemLeiloes", () => {
    it("deve retornar uma lista de leiloes", async () => {
      const leiloes = await obtemLeiloes();
      console.log(leiloes);
    });
  });
});
