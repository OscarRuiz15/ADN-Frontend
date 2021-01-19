import {browser, by, element, ElementFinder, ExpectedConditions, ProtractorExpectedConditions} from 'protractor';

export class AgregarClientePo {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
  }

  navigateTo(urlAgregarCliente = 'clientes/agregar'): Promise<any> {
    return browser.get(`${browser.baseUrl}#/${urlAgregarCliente}`) as Promise<any>;
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

  getInputCorreo(): ElementFinder {
    return element(by.id('correo'));
  }

  async setCorreo(correo: string): Promise<void> {
    return await this.getInputCorreo().sendKeys(correo);
  }

  async clickInputCorreo(): Promise<void> {
    await this.getInputCorreo().click();
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

  getInputCedula(): ElementFinder {
    return element(by.id('cedula'));
  }

  async setCedula(cedula: string): Promise<void> {
    return await this.getInputCedula().sendKeys(cedula);
  }

  async clickInputCedula(): Promise<void> {
    await this.getInputCedula().click();
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
