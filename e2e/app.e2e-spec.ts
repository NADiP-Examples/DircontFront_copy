import { DircontFrontPage } from './app.po';

describe('dircont-front App', function() {
  let page: DircontFrontPage;

  beforeEach(() => {
    page = new DircontFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
