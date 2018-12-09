var until = protractor.ExpectedConditions;
home = require('../book/home_page')
authorization = require('../book/authorization_page')

describe('Login suite', function(){
  browser.ignoreSynchronization = true

  home = new home()
  authorization = new authorization()

  beforeAll = function(){
    home.openPage()
  }

  it('Enter valid email and password', function(){
    expect(browser.getCurrentUrl()).toEndWith("ssls.com/")
    browser.wait(until.presenceOf(home.loginLink(), config.WAIT_TIME, 'Login link is not present'))
    home.loginLink().click()
    browser.wait(until.presenceOf(authorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'))
    expect(browser.getCurrentUrl()).toEndWith("/authorize")
    authorization.enterEmail(config.USER_EMAIL)
    authorization.enterPassword(config.USER_PASSWORD)
    authorization.showPassword()
    authorization.login()
    browser.wait(until.presenceOf(home.emailLink(), config.WAIT_TIME, 'Login link is not present'))
  })

  it('Log out', function(){
    home.openDropdown()
    browser.wait(until.presenceOf(home.logoutButton(), config.WAIT_TIME, 'Login link is not present'))
    home.logout()
    browser.wait(until.presenceOf(authorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'))
    expect(browser.getCurrentUrl()).toEndWith("/authorize")
  })
})
