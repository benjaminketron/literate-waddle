import { LiteratewaddlePage } from './app.po';

describe('literatewaddle App', function() {
  let page: LiteratewaddlePage;

  beforeEach(() => {
    page = new LiteratewaddlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
