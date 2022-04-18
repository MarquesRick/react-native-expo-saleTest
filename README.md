# Aplicação de leilões

Projeto do curso de React Native: Criando Testes para Sua Aplicação na Alura.

## 🔨 Funcionalidades do projeto

Neste projeto, temos uma lista de leilões e uma tela de leião que permite enviar lances.
Com base nessa aplicação iremos criar testes.

![image](https://user-images.githubusercontent.com/9091491/159780701-12e127ea-097d-4465-b39a-3c490861d9b7.png)

## ✔️ Técnicas e tecnologias utilizadas

- `Utilizar React Native com Expo`: O expo facilita a configuração do ambiente;
- `Utilizar a biblioteca jest`: Biblioteca indicada pelo React Native;
- `Criar testes de unidade`: Usando a biblioteca jest para criar os testes de uma função;
- `Gerar porcentagem de coverage`: Configurar o jest para gerar a porcentagem de código testado;
- `Criar testes com mocks`: Usando o jest para simular coportamentos;
- `Utilizar a biblioteca @testing-library/react-native`: Biblioteca robusta para renderizar e testar componentes em memória;
- `Criar testes de componente renderizado em memória`: Preenchendo campos, pressionando botões e mais;
- `Utilizar a biblioteca @testing-library/react-hooks`: Biblioteca que permite testes de hooks com facilidade;
- `Criar testes de hooks`: Testando a execução de hooks sem a necesidade de mocks dos hooks nativos.

rodando o jest
npm test

instalar para o intellisense do jest funcionar no vscode
npm i @types/jest

instalar expo jest 
expo install jest-expo jest

instalar testing library para testar hooks e rederers
npm install --save-dev react-test-renderer@17.0.1 @testing-library/react-native @testing-library/react-hooks

[expo jest](https://docs.expo.dev/guides/testing-with-jest/) 
[jest expect](https://jestjs.io/pt-BR/docs/expect)
[jest globais](https://jestjs.io/pt-BR/docs/api)
[jest coverage](https://docs.expo.dev/guides/testing-with-jest/#code-coverage-reports)
[jest mock](https://jestjs.io/pt-BR/docs/mock-function-api)


Jest Expect:
Para checar se os valores nos testes são os esperados, usamos expects. Na biblioteca jest, existem várias formas de fazer isso, sendo as principais:

toBe(): compara inteiros ou textos;
toBeCloseTo(): compara pontos flutuantes obtidos através de operações matemáticas, pois, devido a arredondamentos, podem haver erros com toBe();
toBeFalsy()/toBeTruthy(): compara valores falsos/verdadeiros em um contexto booleano. No caso de falsy, não apenas false será validado, mas valores como null, 0, '', undefined e NaN também. O restante dos valores é considerado truthy;
toEqual(): compara objetos, verificando se as propriedades internas são iguais. Usar toBe() não retornará o mesmo resultado.

Jest Globais:
describe('', () => {}): cria um contexto com uma descrição para todos os testes dentro da função;
test('', () => {}): cria um teste com uma descrição que deve ser correspondida ao que o teste pretende testar.
it('', () => {}): funciona exatamente igual ao test('', () => {}). É usado para começar a frase do teste, geralmente em inglês, onde a palavra it não precisa ser repetida. Exemplo: it('deve retornar verdadeiro') ou it('must return true');
afterAll(() => {}): executa a função após todos os testes do seu contexto (arquivo ou describe) terminarem sua execução;
beforeAll(() => {}): executa a função antes que todos os testes do seu contexto (arquivo ou describe) comecem sua execução;
afterEach(() => {}): executa a função várias vezes, sempre que um teste do seu contexto (arquivo ou describe) terminarem sua execução;
beforeEach(() => {}): executa a função várias vezes, sempre antes que um teste do seu contexto (arquivo ou describe) começar sua execução.

Mock:
mockClear(): Limpa todos os registros das chamadas das funções;
mockReset(): Faz tudo o que mockClear() faz, e também limpa as implementações e valores a serem retornados, voltando a ser como quando criamos uma função jest.fn();
mockRestore(): Faz tudo o que mockClear() faz, e também volta a implementação de método original;
mockImplementation(fn): Seta uma nova implementação para a função mockada. Há um atalho para esse método: jest.fn(implementation);
mockReturnValue(value): Seta um valor fixo a ser retornado.

O que são snapshots?
Um tipo de teste muito interessante são os snapshots. Como funciona?

Podemos testar componentes da aplicação usando snapshots, que basicamente verificam se a estrutura do componente permanece a mesma, usando a referência JSON que a renderização retorna.

Porém, devemos ter cuidado com esse tipo de teste, pois ele não testa de fato a regra de negócio, mas, sim, as estruturas e até estilos do componente. Além disso, adicionar esse teste pode não fazer sentido algum no caso de um componente que sofre alterações constantes, já que ele sempre irá falhar e solicitar que atualizemos a snapshot.

Então, quando devemos usar testes de snapshot?
Em componentes simples, que não contém regras de negócio e que não mudam com frequência. É importante sempre tomar cuidado para que o coverage gerado por esse teste não seja aplicado a subcomponentes, esquecendo, assim, de avaliar se eram necessários testes daqueles também.

Abaixo, você pode ver um exemplo de teste de snapshot:

```javascript
import React from 'react';
import { render } from '@testing-library/react-native';

import Componente from '../Componente.js';

describe('Componente.js', () => {
  it('deve renderizar sem erros', () => {
    const { toJSON } = render(<Componente />);

    expect(toJSON()).toMatchSnapshot();
  });
});
```
Você pode rodar npm jest -u --coverage=false para atualizar as snapshots que falharam, ou até adicionar este comando aos seus scripts no package.json.




