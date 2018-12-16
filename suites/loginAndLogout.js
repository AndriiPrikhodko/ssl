const until = protractor.ExpectedConditions;
const Home = require('../book/home_page');
const Authorization = require('../book/authorization_page');

describe('Login suite', function() {
    browser.ignoreSynchronization = true;

    instHome = new Home();
    instAuthorization = new Authorization();
    beforeEach(function() {instHome.openPage()}) // beforeEach 'it' redirect to home page

    describe('Login and logout', function() {
        afterAll(function() {
            browser.executeScript('window.sessionStorage.clear();'); // clear session
            browser.executeScript('window.localStorage.clear();'); //clear local storage
        })

        it('Enter valid email and password', function() {
            expect(browser.getCurrentUrl()).toEndWith('ssls.com/');
            browser.wait(until.presenceOf(instHome.loginLink(), config.WAIT_TIME, 'Login link is not present'));
            instHome.loginLink().click();
            browser.wait(until.presenceOf(instAuthorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'));
            expect(browser.getCurrentUrl()).toEndWith('/authorize');
            instAuthorization.enterEmail(config.USER_EMAIL);
            instAuthorization.enterPassword(config.USER_PASSWORD);
            instAuthorization.showPassword();
            instAuthorization.login();
            browser.wait(until.presenceOf(instHome.emailLink(), config.WAIT_TIME, 'Login link is not present'));
        })

        it('Log out', function() {
            instHome.openDropdown();
            browser.wait(until.presenceOf(instHome.logoutButton(), config.WAIT_TIME, 'Login link is not present'));
            instHome.logout();
            browser.wait(until.presenceOf(instAuthorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'));
            expect(browser.getCurrentUrl()).toEndWith('/authorize');
        })
    })

    it('Login with empty fields', function() {
        instHome.openPage();
        expect(browser.getCurrentUrl()).toEndWith('ssls.com/');
        browser.wait(until.presenceOf(instHome.loginLink(), config.WAIT_TIME, 'Login link is not present'));
        instHome.loginLink().click();
        browser.wait(until.presenceOf(instAuthorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'));
        expect(browser.getCurrentUrl()).toEndWith('/authorize');
        instAuthorization.enterEmail('');
        instAuthorization.enterPassword('');
        instAuthorization.login();
        browser.wait(until.presenceOf(instAuthorization.emailErrorBox(), config.WAIT_TIME, 'Email error box does not apppear'));
        instAuthorization.emailErrorBox().getText()
        .then(emailError => expect(unescape(escape(emailError).replace('%0A','%20'))).toBe('Oops, please enter your email')) // replace break line with space
        instAuthorization.passwordErrorBox().getText()
        .then(passwordError => expect(unescape(escape(passwordError).replace('%0A','%20'))).toBe('Looks like you’ve missed this one')) // replace break line with space
    })
})
