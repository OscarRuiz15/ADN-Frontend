import { browser } from 'protractor';
import {ListarCanchasPo} from './listar-canchas.po';

describe('Listar los registros canchas', () => {
  let listarCanchasPo: ListarCanchasPo;
  const TITULO_TABLA = 'Canchas registradas ';
  const URL_LISTAR_CANCHAS = 'canchas';

  beforeEach(async () => {
    listarCanchasPo = new ListarCanchasPo();
  });

  it('Deberia mostrar la tabla de canchas', async () => {
    // arrange
    await listarCanchasPo.navigateTo(URL_LISTAR_CANCHAS);
    await browser.sleep(500);

    // act
    const textoTitulo = await listarCanchasPo.getTextoDelTitulo();

    // assert
    expect(textoTitulo.split('(')[0]).toEqual(TITULO_TABLA);
  });

});
