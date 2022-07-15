import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';


describe('Testes para o exercicios Parte 1', () => {
  test('Verifica se o valor de retorno é 10', () => {
    render(<App />);
    numeroAleatorio = jest.fn().mockReturnValue(10);
    numeroAleatorio();

    expect(numeroAleatorio()).getByText(10)
  })
});

