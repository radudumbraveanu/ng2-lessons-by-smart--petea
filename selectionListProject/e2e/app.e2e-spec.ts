import { SelectionListProjectPage } from './app.po';

describe('selection-list-project App', () => {
  let page: SelectionListProjectPage;

  beforeEach(() => {
    page = new SelectionListProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
