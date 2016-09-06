import { EMBreweryControlPage } from './app.po';

describe('embrewery-control App', function() {
  let page: EMBreweryControlPage;

  beforeEach(() => {
    page = new EMBreweryControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
