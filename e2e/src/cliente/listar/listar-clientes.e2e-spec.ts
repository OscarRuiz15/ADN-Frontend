import { browser } from 'protractor';
import {ListarClientesPo} from './listar-clientes.po';

describe('Listar los registros clientes', () => {
  let listarClientesPo: ListarClientesPo;
  const TITULO_TABLA = 'Clientes registrados ';
  const URL_LISTAR_CLIENTES = 'clientes/listar';

  beforeEach(async () => {
    listarClientesPo = new ListarClientesPo();
  });

  it('Deberia mostrar la tabla de clientes', async () => {
    // arrange
    await listarClientesPo.navigateTo(URL_LISTAR_CLIENTES);
    await browser.sleep(500);

    // act
    const textoTitulo = await listarClientesPo.getTextoDelTitulo();

    // assert
    expect(textoTitulo.split('(')[0]).toEqual(TITULO_TABLA);
  });

});
