import { browser } from 'protractor';
import {AgregarClientePo} from './agregar-cliente.po';

describe('Crear un registro de cliente', () => {
  let agregarClientePo: AgregarClientePo;
  const NOMBRE = 'NOMBRE TEST';
  const CORREO = 'CORREO TEST';
  const TELEFONO = '1234567890';
  const CEDULA = '11134233';
  const EL_CLIENTE_HA_SIDO_REGISTRADO = 'El cliente ha sido registrado';
  const CEDULA_EXISTENTE = '1115087378';
  const YA_EXISTE_UN_CLIENTE_REGISTRADO_CON_LA_MISMA_CEDULA = 'Ya existe un cliente registrado con la misma cedula';

  beforeEach(async () => {
    agregarClientePo = new AgregarClientePo();
    await agregarClientePo.navigateTo();
  });

  it('Deberia crear un cliente', async () => {
    // arrange
    await agregarClientePo.clickInputNombre();
    await browser.sleep(500);
    await agregarClientePo.setNombre(NOMBRE);
    await browser.sleep(500);
    await agregarClientePo.clickInputCorreo();
    await browser.sleep(500);
    await agregarClientePo.setCorreo(CORREO);
    await browser.sleep(500);
    await agregarClientePo.clickInputTelefono();
    await browser.sleep(500);
    await agregarClientePo.setTelefono(TELEFONO);
    await browser.sleep(500);
    await agregarClientePo.clickInputCedula();
    await browser.sleep(500);
    await agregarClientePo.setCedula(CEDULA);
    await browser.sleep(500);
    await agregarClientePo.clickBotonRegistrar();
    await browser.sleep(500);
    await agregarClientePo.esperarAlerta();
    await browser.sleep(500);

    // act
    const alerta = await agregarClientePo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(EL_CLIENTE_HA_SIDO_REGISTRADO);
  });

  it('Deberia retornar un error porque ya existe un cliente con la misma cedula', async () => {
    // arrange
    await agregarClientePo.clickInputNombre();
    await browser.sleep(500);
    await agregarClientePo.setNombre(NOMBRE);
    await browser.sleep(500);
    await agregarClientePo.clickInputCorreo();
    await browser.sleep(500);
    await agregarClientePo.setCorreo(CORREO);
    await browser.sleep(500);
    await agregarClientePo.clickInputTelefono();
    await browser.sleep(500);
    await agregarClientePo.setTelefono(TELEFONO);
    await browser.sleep(500);
    await agregarClientePo.clickInputCedula();
    await browser.sleep(500);
    await agregarClientePo.setCedula(CEDULA_EXISTENTE);
    await browser.sleep(500);
    await agregarClientePo.clickBotonRegistrar();
    await browser.sleep(500);
    await agregarClientePo.esperarAlerta();
    await browser.sleep(500);

    // act
    const alerta = await agregarClientePo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(YA_EXISTE_UN_CLIENTE_REGISTRADO_CON_LA_MISMA_CEDULA);
  });
});
