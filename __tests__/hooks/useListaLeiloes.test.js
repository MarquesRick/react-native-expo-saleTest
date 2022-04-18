import { renderHook, act } from '@testing-library/react-hooks';
import useListaLeiloes from '../../src/hooks/useListaLeiloes';
import { obtemLeiloes } from '../../src/repositorio/leilao';

jest.mock('../../src/repositorio/leilao.js');

const mockLeiloes = [
  {
    id: 1,
    nome: 'leilao',
    descricao: 'leilao teste 1',
  },
];

const mockLeiloesAtualizada = [
  {
    id: 1,
    nome: 'leilao',
    descricao: 'leilao teste 1',
  },
  {
    id: 2,
    nome: 'leilao 2',
    descricao: 'leilao teste 2',
  },
];

describe('hooks/useListaLeiloes', () => {
  it('deve retornar uma lista de leilões e uma função para atualizar', async () => {
    obtemLeiloes.mockImplementation(() => mockLeiloes);
    const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());
    expect(result.current[0]).toEqual([]);
    await waitForNextUpdate();
    expect(result.current[0]).toEqual(mockLeiloes);

    //testando o atualizar
    obtemLeiloes.mockImplementation(() => mockLeiloesAtualizada);
    //act: as funções que estão dentro de states e effect são executadas e aguarda serem executadas
    await act(() => result.current[1]());
    expect(result.current[0]).toEqual(mockLeiloesAtualizada);
  });
});
