const Nightmare = require('nightmare');

describe('test duckduckgo search results', () => {
  it('should find the nightmare github link first', function(done) {
    jest.setTimeout(10000);

    const nightmare = Nightmare({
      //openDevTools: { mode: 'undocked' },
      show: true
    });
    nightmare
      .goto('https://duckduckgo.com')
      .type('#search_form_input_homepage', 'github nightmare')
      .click('#search_button_homepage')
      .wait('#links .result__a')
      .evaluate(() => document.querySelector('#links .result__a').href)
      .end()
      .then(link => {
        expect(link).toBe('https://github.com/segmentio/nightmare')
        done()
      })
  });
})
