import { ComedyclubPage } from './app.po';

describe('comedyclub App', () => {
  let page: ComedyclubPage;

  beforeEach(() => {
    page = new ComedyclubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
