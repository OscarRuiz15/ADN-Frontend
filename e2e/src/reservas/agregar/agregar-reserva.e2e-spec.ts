import { browser } from 'protractor';
import {AgregarReservaPo} from './agregar-reserva.po';

describe('Crear un registro reserva', () => {
  let agregarReservaPo: AgregarReservaPo;
  const CLIENTE = '1115245856';
  const CANCHA = 'C2';
  const NO_SE_PUEDEN_REALIZAR_RESERVACIONES_PARA_EL_DIA_ACTUAL = 'No se pueden realizar reservaciones para el dia actual';

  beforeEach(async () => {
    agregarReservaPo = new AgregarReservaPo();
    await agregarReservaPo.navigateTo();
  });

  it('Deberia retornar un error porque no se pueden realizar reservas el dia actual', async () => {
    // arrange
    await agregarReservaPo.clickSelectCliente();
    await browser.sleep(500)
    await agregarReservaPo.clickOpcionCliente(CLIENTE);
    await browser.sleep(500)
    await agregarReservaPo.clickSelectCancha();
    await browser.sleep(500)
    await agregarReservaPo.clickOpcionCancha(CANCHA);
    await browser.sleep(500)
    await agregarReservaPo.clickBotonRegistrar();
    await browser.sleep(500)
    await agregarReservaPo.esperarAlerta();
    await browser.sleep(500)

    // act
    const alerta = await agregarReservaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(NO_SE_PUEDEN_REALIZAR_RESERVACIONES_PARA_EL_DIA_ACTUAL);
  });
});
