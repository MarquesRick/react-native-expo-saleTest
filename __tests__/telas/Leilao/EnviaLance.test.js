import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import EnviaLance from '../../../src/telas/Leilao/componentes/EnviaLance';
import {
  ENVIADO,
  NAO_ENVIADO,
} from '../../../src/negocio/constantes/estadosLance';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('telas/Leilao/componentes/EnviaLance', () => {
  it('deve enviar o lance quando o botão for pressionado', async () => {
    //fn: mokar função
    const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO)));
    const { getByPlaceholderText, getByA11yHint, getByText } = render(
      <EnviaLance enviaLance={enviaLance} cor="blue" />,
    );

    const input = getByPlaceholderText('R$');
    const botao = getByA11yHint('Enviar lance');
    //evento para alterar o valor de um texto (input q será alterado, valor alterado)
    fireEvent.changeText(input, '10');
    //evento para pressionar botão (botão a ser pressionado)
    fireEvent.press(botao);
    await waitFor(() => {
      expect(enviaLance).toHaveBeenCalledWith('10');
      expect(getByText(ENVIADO)).toBeTruthy();
    });
    //testar erros
    expect(() => getByText(NAO_ENVIADO)).toThrow();
  });
});
