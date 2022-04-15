import {
  obtemLancesDoLeilao,
  adicionaLance,
} from "../../src/repositorio/lance";
import apiLeiloes from "../../src/servicos/apiLeiloes";

jest.mock("../../src/servicos/apiLeiloes.js");

const mockLances = [
  {
    id: 1,
    valor: 10,
  },
  {
    id: 2,
    valor: 20,
  },
];
const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: retorno });
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

describe("obtemLancesDoLeilao", () => {
  beforeEach(() => {
    apiLeiloes.get.mockClear();
    apiLeiloes.post.mockClear();
  });
  it("deve retornar um array de lances", async () => {
    apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLances));
    const lances = await obtemLancesDoLeilao(1);
    expect(lances).toEqual(mockLances);
    expect(apiLeiloes.get).toHaveBeenCalledWith(
      "/lances?leilaoId=1&_sort=valor&_order=desc"
    );
    expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
  });
  describe("adicionaLance", () => {
    it("deve retornar true caso a requisição funcione", async () => {
      apiLeiloes.post.mockImplementation(() => mockRequisicao());

      const sucesso = await adicionaLance(mockLances[0]);

      expect(apiLeiloes.post).toHaveBeenCalledWith("/lances", mockLances[0]);
      expect(apiLeiloes.post).toHaveBeenCalledTimes(1);
      expect(sucesso).toBe(true);
    });

    it("deve retornar false caso dê erro na requisição", async () => {
      apiLeiloes.post.mockImplementation(() => mockRequisicaoErro());

      const sucesso = await adicionaLance(mockLances[0]);

      expect(apiLeiloes.post).toHaveBeenCalledWith("/lances", mockLances[0]);
      expect(apiLeiloes.post).toHaveBeenCalledTimes(1);
      expect(sucesso).toBe(false);
    });
  });
});
