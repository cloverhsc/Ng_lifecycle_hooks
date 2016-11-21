import { NGLifecycleHooksPage } from './app.po';

describe('ng-lifecycle-hooks App', function() {
  let page: NGLifecycleHooksPage;

  beforeEach(() => {
    page = new NGLifecycleHooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
