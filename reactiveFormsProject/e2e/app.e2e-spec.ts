import { ReactiveFormsProjectPage } from './app.po';

describe('reactive-forms-project App', () => {
  let page: ReactiveFormsProjectPage;

  beforeEach(() => {
    page = new ReactiveFormsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
