import {browser, by, element, ElementFinder, ExpectedConditions, ProtractorExpectedConditions} from 'protractor';

export class AgregarReservaPo {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
  }

  navigateTo(urlAgregarReserva = 'reservas/agregar'): Promise<any> {
    return browser.get(`${browser.baseUrl}#/${urlAgregarReserva}`) as Promise<any>;
  }

  getSelectCliente(): ElementFinder {
    return element(by.id('cliente'));
  }

  async clickSelectCliente(): Promise<void> {
    await this.getSelectCliente().click();
  }

  getOpcionCliente(cedulaCliente: string): ElementFinder {
    return element(by.id(cedulaCliente));
  }

  async clickOpcionCliente(cedulaCliente: string): Promise<void> {
    await this.getOpcionCliente(cedulaCliente).click();
  }

  getSelectCancha(): ElementFinder {
    return element(by.id('cancha'));
  }

  async clickSelectCancha(): Promise<void> {
    await this.getSelectCancha().click();
  }

  getOpcionCancha(codigoCancha: string): ElementFinder {
    return element(by.id(codigoCancha));
  }

  async clickOpcionCancha(codigoCancha: string): Promise<void> {
    await this.getOpcionCliente(codigoCancha).click();
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
