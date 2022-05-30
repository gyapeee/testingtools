describe('google.com Demo', function() {

  beforeEach(browser => browser.navigateTo('https://www.google.com/'));

  it('Demo test google.com', function(browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Google')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatchjs')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.textContains('.mainline-results', 'Nightwatch.js');
  });

  it('Demo test FAIL google.com', function(browser) {
    browser
      .waitForElementVisible('body') 
      .assert.titleContains('Google')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatchjs')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]') 
      .assert.textContains('.mainline-results', 'Nightwatch.js'); // this is a nonexistent element
  });

  after(browser => browser.end());
});
