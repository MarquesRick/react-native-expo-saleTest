import { renderHook } from '@testing-library/react-hooks';
import useListaLeiloes from '../../src/hooks/useListaLeiloes';

describe('hooks/useListaLeiloes', () => {
  it('deve retornar uma lista de leilões e uma função para atualizar', () => {
    useListaLeiloes();
  });
});
