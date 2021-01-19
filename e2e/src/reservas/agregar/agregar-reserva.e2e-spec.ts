import {AgregarReservaPo} from './agregar-reserva.po';

describe('Crear un registro reserva', () => {
  let agregarReservaPo: AgregarReservaPo;
  const CLIENTE = '1115245856';
  const CANCHA = 'C2';
  const LA_RESERVA_HA_SIDO_REALIZADA = 'La reserva ha sido realizada';
  const NO_SE_PUEDEN_REALIZAR_RESERVACIONES_PARA_EL_DIA_ACTUAL = 'No se pueden realizar reservaciones para el dia actual';

  beforeEach(async () => {
    agregarReservaPo = new AgregarReservaPo();
    await agregarReservaPo.navigateTo();
  });

  it('Deberia retornar un error porque no se pueden realizar reservas el dia actual', async () => {
    // arrange
    await agregarReservaPo.clickSelectCliente();
    await agregarReservaPo.clickOpcionCliente(CLIENTE);
    await agregarReservaPo.clickSelectCancha();
    await agregarReservaPo.clickOpcionCancha(CANCHA);
    await agregarReservaPo.clickBotonRegistrar();
    await agregarReservaPo.esperarAlerta();

    // act
    const alerta = await agregarReservaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(NO_SE_PUEDEN_REALIZAR_RESERVACIONES_PARA_EL_DIA_ACTUAL);
  });
});
