import { SmartProjectPage } from './app.po';

describe('smart-project App', () => {
  let page: SmartProjectPage;

  beforeEach(() => {
    page = new SmartProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
