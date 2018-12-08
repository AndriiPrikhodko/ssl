var until = protractor.ExpectedConditions;
home = require('../book/home_page')
authorization = require('../book/authorization_page')

describe('Login suite', function(){
  browser.ignoreSynchronization = true;
  home = new home()

  beforeEach = function(){
    home.openPage()
  }

  describe('Enter valid email and password', function(){
    it('assert home page is opened', function() {
      expect(browser.getCurrentUrl()).toContain("ssls.com")
      })
    browser.wait(until.presenceOf(element(by.linkText('LOG IN'))), 5000, 'Login link is not present')
    element(by.linkText('LOG IN')).click()
    browser.sleep(5000)
     it('assert authorization page is opened', function() {
        expect(browser.getCurrentUrl()).toContain("/authorize")
      })
  })

})
