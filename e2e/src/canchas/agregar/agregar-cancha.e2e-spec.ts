import { browser } from 'protractor';
import {AgregarCanchaPo} from './agregar-cancha.po';

describe('Crear un registro de una cancha', () => {
  let agregarCanchaPo: AgregarCanchaPo;
  const CODIGO = 'CODIGO TEST';
  const NOMBRE = 'NOMBRE TEST';
  const DIRECCION = 'DIRECCION TEST';
  const TELEFONO = '3152455856';
  const PRECIO_RESERVA = 97500;
  const TIPO_CANCHA = 'FUTBOL_SIETE';
  const LA_CANCHA_HA_SIDO_REGISTRADA = 'La cancha ha sido registrada';
  const CODIGO_EXISTENTE = 'C1';
  const YA_EXISTE_UNA_CANCHA_REGISTRADA_CON_EL_MISMO_CODIGO = 'Ya existe una cancha registrada con el mismo codigo';

  beforeEach(async () => {
    agregarCanchaPo = new AgregarCanchaPo();
    await agregarCanchaPo.navigateTo();
  });

  it('Deberia crear una cancha', async () => {
    // arrange
    await agregarCanchaPo.clickInputCodigo();
    await browser.sleep(500)
    await agregarCanchaPo.setCodigo(CODIGO);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputNombre();
    await browser.sleep(500)
    await agregarCanchaPo.setNombre(NOMBRE);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputDireccion();
    await browser.sleep(500)
    await agregarCanchaPo.setDireccion(DIRECCION);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputTelefono();
    await browser.sleep(500)
    await agregarCanchaPo.setTelefono(TELEFONO);
    await browser.sleep(500)
    await agregarCanchaPo.clickSelectTipoCancha();
    await browser.sleep(500)
    await agregarCanchaPo.clickOpcionTipoCancha(TIPO_CANCHA);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputPrecioReserva();
    await browser.sleep(500)
    await agregarCanchaPo.setPrecioReserva(PRECIO_RESERVA);
    await browser.sleep(500)
    await agregarCanchaPo.clickBotonRegistrar();
    await browser.sleep(500)
    await agregarCanchaPo.esperarAlerta();
    await browser.sleep(500)

    // act
    const alerta = await agregarCanchaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(LA_CANCHA_HA_SIDO_REGISTRADA);
  });

  it('Deberia retornar un error porque ya existe una cancha con el mismo codigo', async () => {
    // arrange
    await agregarCanchaPo.clickInputCodigo();
    await browser.sleep(500)
    await agregarCanchaPo.setCodigo(CODIGO_EXISTENTE);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputNombre();
    await browser.sleep(500)
    await agregarCanchaPo.setNombre(NOMBRE);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputDireccion();
    await browser.sleep(500)
    await agregarCanchaPo.setDireccion(DIRECCION);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputTelefono();
    await browser.sleep(500)
    await agregarCanchaPo.setTelefono(TELEFONO);
    await browser.sleep(500)
    await agregarCanchaPo.clickSelectTipoCancha();
    await browser.sleep(500)
    await agregarCanchaPo.clickOpcionTipoCancha(TIPO_CANCHA);
    await browser.sleep(500)
    await agregarCanchaPo.clickInputPrecioReserva();
    await browser.sleep(500)
    await agregarCanchaPo.setPrecioReserva(PRECIO_RESERVA);
    await browser.sleep(500)
    await agregarCanchaPo.clickBotonRegistrar();
    await browser.sleep(500)
    await agregarCanchaPo.esperarAlerta();
    await browser.sleep(500)

    // act
    const alerta = await agregarCanchaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(YA_EXISTE_UNA_CANCHA_REGISTRADA_CON_EL_MISMO_CODIGO);
  });
});
