import { LazyLoadingProjectPage } from './app.po';

describe('lazy-loading-project App', () => {
  let page: LazyLoadingProjectPage;

  beforeEach(() => {
    page = new LazyLoadingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
