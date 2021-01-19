import {ListarCanchasPo} from './listar-canchas.po';

describe('Listar los registros clientes', () => {
  let listarCanchasPo: ListarCanchasPo;
  const TITULO_TABLA = 'Canchas registradas ';
  const URL_LISTAR_CANCHAS = 'canchas';

  beforeEach(async () => {
    listarCanchasPo = new ListarCanchasPo();
  });

  it('Deberia mostrar la tabla de canchas', async () => {
    // arrange
    await listarCanchasPo.navigateTo(URL_LISTAR_CANCHAS);

    // act
    const textoTitulo = await listarCanchasPo.getTextoDelTitulo();

    // assert
    expect(textoTitulo.split('(')[0]).toEqual(TITULO_TABLA);
  });

});
