import { obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from "../../src/servicos/apiLeiloes";

jest.mock("../../src/servicos/apiLeiloes.js");

const mockLeiloes = [
  {
    id: 1,
    nome: "leilao",
    descricao: "leilao teste 1",
  },
];

const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

const mockRequisicaoErro = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe("repositorio/leilao", () => {
  describe("obtemLeiloes", () => {
    it("deve retornar uma lista de leiloes", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));
      const leiloes = await obtemLeiloes();
      expect(leiloes).toEqual(mockLeiloes);
    });
    it("deve retornar uma lista vazia quando a requisicao falhar", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
      const leiloes = await obtemLeiloes();
      expect(leiloes).toEqual([]);
    });
  });
});
