import { FormsProjectPage } from './app.po';

describe('forms-project App', () => {
  let page: FormsProjectPage;

  beforeEach(() => {
    page = new FormsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
