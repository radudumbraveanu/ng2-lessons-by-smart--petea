import { PipeProjectPage } from './app.po';

describe('pipe-project App', () => {
  let page: PipeProjectPage;

  beforeEach(() => {
    page = new PipeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
