import {ListarReservasPo} from './listar-reservas.po';

describe('Listar los registros reservas', () => {
  let listarReservasPo: ListarReservasPo;
  const TITULO_TABLA = 'Reservas realizadas ';
  const URL_LISTAR_RESERVAS = 'reservas';

  beforeEach(async () => {
    listarReservasPo = new ListarReservasPo();
  });

  it('Deberia mostrar la tabla de reservas', async () => {
    // arrange
    await listarReservasPo.navigateTo(URL_LISTAR_RESERVAS);

    // act
    const textoTitulo = await listarReservasPo.getTextoDelTitulo();

    // assert
    expect(textoTitulo.split('(')[0]).toEqual(TITULO_TABLA);
  });

});
