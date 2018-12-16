// until = protractor.ExpectedConditions;
// Home = require('../book/home_page');
// Authorization = require('../book/authorization_page');
//
// describe('Login suite', function() {
//     browser.ignoreSynchronization = true;
//
//     instHome = new Home();
//     instAuthorization = new Authorization();
//
//     it('Empty fields', function() {
//       instHome.openPage();
//       expect(browser.getCurrentUrl()).toEndWith("ssls.com/");
//       browser.wait(until.presenceOf(instHome.loginLink(), config.WAIT_TIME, 'Login link is not present'));
//       instHome.loginLink().click();
//       browser.wait(until.presenceOf(instAuthorization.emailField(), config.WAIT_TIME, 'instAuthorization page is loaded'));
//       expect(browser.getCurrentUrl()).toEndWith("/authorize");
//       instAuthorization.enterEmail("");
//       instAuthorization.enterPassword("");
//       instAuthorization.login();
//     })
// })
