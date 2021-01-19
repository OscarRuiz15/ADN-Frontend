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
    await agregarCanchaPo.setCodigo(CODIGO);
    await agregarCanchaPo.clickInputNombre();
    await agregarCanchaPo.setNombre(NOMBRE);
    await agregarCanchaPo.clickInputDireccion();
    await agregarCanchaPo.setDireccion(DIRECCION);
    await agregarCanchaPo.clickInputTelefono();
    await agregarCanchaPo.setTelefono(TELEFONO);
    await agregarCanchaPo.clickSelectTipoCancha();
    await agregarCanchaPo.clickOpcionTipoCancha(TIPO_CANCHA);
    await agregarCanchaPo.clickInputPrecioReserva();
    await agregarCanchaPo.setPrecioReserva(PRECIO_RESERVA);
    await agregarCanchaPo.clickBotonRegistrar();
    await agregarCanchaPo.esperarAlerta();

    // act
    const alerta = await agregarCanchaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(LA_CANCHA_HA_SIDO_REGISTRADA);
  });

  it('Deberia retornar un error porque ya existe una cancha con el mismo codigo', async () => {
    // arrange
    await agregarCanchaPo.clickInputCodigo();
    await agregarCanchaPo.setCodigo(CODIGO_EXISTENTE);
    await agregarCanchaPo.clickInputNombre();
    await agregarCanchaPo.setNombre(NOMBRE);
    await agregarCanchaPo.clickInputDireccion();
    await agregarCanchaPo.setDireccion(DIRECCION);
    await agregarCanchaPo.clickInputTelefono();
    await agregarCanchaPo.setTelefono(TELEFONO);
    await agregarCanchaPo.clickSelectTipoCancha();
    await agregarCanchaPo.clickOpcionTipoCancha(TIPO_CANCHA);
    await agregarCanchaPo.clickInputPrecioReserva();
    await agregarCanchaPo.setPrecioReserva(PRECIO_RESERVA);
    await agregarCanchaPo.clickBotonRegistrar();
    await agregarCanchaPo.esperarAlerta();

    // act
    const alerta = await agregarCanchaPo.getTextoDeAlerta();

    // assert
    expect(alerta).toEqual(YA_EXISTE_UNA_CANCHA_REGISTRADA_CON_EL_MISMO_CODIGO);
  });
});
