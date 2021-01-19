import {browser, by, element, ElementFinder, ExpectedConditions, ProtractorExpectedConditions} from 'protractor';

export class ListarCanchasPo {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
  }

  navigateTo(urlListarClientes): Promise<any> {
    return browser.get(`${browser.baseUrl}#/${urlListarClientes}`) as Promise<any>;
  }

  getTituloTabla(): ElementFinder {
    return element(by.className('card-title'));
  }

  async getTextoDelTitulo(): Promise<string> {
    return await this.getTituloTabla().getText();
  }

}
