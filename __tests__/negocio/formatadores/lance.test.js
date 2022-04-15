import { formataMaiorLanceDoLeilao } from "../../../src/negocio/formatadores/lance";

describe("negocio/formatadores/lance", () => {
  describe("formata/formataMaiorLanceDoLeilao", () => {
    it("deve retornar o maior lance de um leilao", () => {
      const lances = [
        {
          valor: 10,
        },
        {
          valor: 30,
        },
        {
          valor: 20,
        },
      ];
      const resultado = formataMaiorLanceDoLeilao(lances, 5);
      expect(resultado).toBe(30);
    });

    it("deve retornar o valor inicial caso nao existir lances", () => {
      const lances = [];
      const valorInicial = 10;
      const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
      expect(maiorLance).toBe(10);
    });
  });
});
