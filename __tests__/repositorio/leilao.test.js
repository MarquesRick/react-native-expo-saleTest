import { obtemLeiloes, obtemLeilao } from "../../src/repositorio/leilao";
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
  //funcao para rodar antes de cada teste
  beforeEach(() => {
    apiLeiloes.get.mockClear();
  });
  describe("obtemLeiloes", () => {
    it("deve retornar uma lista de leiloes", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));
      const leiloes = await obtemLeiloes();
      expect(leiloes).toEqual(mockLeiloes);

      //se foi chamado com a url do get /leiloes
      expect(apiLeiloes.get).toHaveBeenCalledWith("/leiloes");

      //quantas vezes foi chamado
      expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
    });
    it("deve retornar uma lista vazia quando a requisicao falhar", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
      const leiloes = await obtemLeiloes();

      expect(leiloes).toEqual([]);

      //se foi chamado com a url do get /leiloes
      expect(apiLeiloes.get).toHaveBeenCalledWith("/leiloes");

      //quantas vezes foi chamado
      expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
    });
  });
  describe("obtemLeilao", () => {
    it("deve retornar um leilão", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes[0]));

      const leilao = await obtemLeilao(1);
      expect(leilao).toEqual(mockLeiloes[0]);
    });

    it("deve retornar um objeto vazio caso erro na requisição", async () => {
      apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());

      const leilao = await obtemLeilao(1);
      expect(leilao).toEqual({});
    });
  });
});
