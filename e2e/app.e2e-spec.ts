import { AppPage } from './app.po';

xdescribe('angular2-worklog-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Log in to view list of your worklogs');
  });
});
