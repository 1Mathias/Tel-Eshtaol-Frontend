import { TelEshtaolAngularPage } from './app.po';

describe('tel-eshtaol-angular App', function() {
  let page: TelEshtaolAngularPage;

  beforeEach(() => {
    page = new TelEshtaolAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
