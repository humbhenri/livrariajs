import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Livraria';

  beforeEach(function () {
    browser.get('');
  });

  it('no início mostra a página de login: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual('Livraria');
  });

});
