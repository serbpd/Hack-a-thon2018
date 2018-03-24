import { Hackathon2018Page } from './app.po';

describe('hackathon2018 App', function() {
  let page: Hackathon2018Page;

  beforeEach(() => {
    page = new Hackathon2018Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
