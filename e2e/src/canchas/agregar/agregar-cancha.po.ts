import {browser, by, element, ElementFinder, ExpectedConditions, ProtractorExpectedConditions} from 'protractor';

export class AgregarCanchaPo {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
  }

  navigateTo(urlAgregarCancha = 'canchas/agregar'): Promise<any> {
    return browser.get(`${browser.baseUrl}#/${urlAgregarCancha}`) as Promise<any>;
  }

  getInputCodigo(): ElementFinder {
    return element(by.id('codigo'));
  }

  async setCodigo(codigo: string): Promise<void> {
    return await this.getInputCodigo().sendKeys(codigo);
  }

  async clickInputCodigo(): Promise<void> {
    await this.getInputCodigo().click();
  }

  getInputNombre(): ElementFinder {
    return element(by.id('nombre'));
  }

  async setNombre(nombre: string): Promise<void> {
    return await this.getInputNombre().sendKeys(nombre);
  }

  async clickInputNombre(): Promise<void> {
    await this.getInputNombre().click();
  }

  getInputDireccion(): ElementFinder {
    return element(by.id('direccion'));
  }

  async setDireccion(direccion: string): Promise<void> {
    return await this.getInputDireccion().sendKeys(direccion);
  }

  async clickInputDireccion(): Promise<void> {
    await this.getInputDireccion().click();
  }

  getInputTelefono(): ElementFinder {
    return element(by.id('telefono'));
  }

  async setTelefono(telefono: string): Promise<void> {
    return await this.getInputTelefono().sendKeys(telefono);
  }

  async clickInputTelefono(): Promise<void> {
    await this.getInputTelefono().click();
  }

  getSelectTipoCancha(): ElementFinder {
    return element(by.id('tipoCancha'));
  }

  async clickSelectTipoCancha(): Promise<void> {
    await this.getSelectTipoCancha().click();
  }

  getOpcionTipoCancha(tipoCancha: string): ElementFinder {
    return element(by.id(tipoCancha));
  }

  async clickOpcionTipoCancha(tipoCancha: string): Promise<void> {
    await this.getOpcionTipoCancha(tipoCancha).click();
  }

  getInputPrecioReserva(): ElementFinder {
    return element(by.id('precioReserva'));
  }

  async setPrecioReserva(precioReserva: number): Promise<void> {
    return await this.getInputPrecioReserva().sendKeys(precioReserva);
  }

  async clickInputPrecioReserva(): Promise<void> {
    await this.getInputPrecioReserva().click();
  }

  getBotonRegistrar(): ElementFinder {
    return element(by.id('registrar'));
  }

  async clickBotonRegistrar(): Promise<void> {
    await this.getBotonRegistrar().click();
  }

  getMensajeAlerta(): ElementFinder {
    return element(by.className('swal2-html-container'));
  }

  async esperarAlerta(): Promise<void> {
    return await this.esperarElementoAparezca(this.getMensajeAlerta());
  }

  async esperarElementoAparezca(elementFinder: ElementFinder): Promise<void> {
    const id = await elementFinder.getId();
    return await browser.wait(
      this.until.presenceOf(elementFinder),
      5000,
      `El elemento ${id} está tardando mucho en aparecer en el DOM`
    );
  }

  async getTextoDeAlerta(): Promise<string> {
    return await this.getMensajeAlerta().getText();
  }
}
