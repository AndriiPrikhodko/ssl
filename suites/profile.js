const until = protractor.ExpectedConditions;
const Home = require('../book/home_page');
const Authorization = require('../book/authorization_page');
const Profile = require('../book/profile_page');

describe('Profile suite', function() {
    browser.ignoreSynchronization = true;

    instHome = new Home();
    instAuthorization = new Authorization();
    instProfile = new Profile();

    beforeAll(function() {
        instHome.openPage();
        browser.wait(until.presenceOf(instHome.loginLink(), config.WAIT_TIME, 'Login link is not present'));
        instHome.loginLink().click();
        browser.wait(until.presenceOf(instAuthorization.emailField(), config.WAIT_TIME, 'Authorization page is loaded'));
        instAuthorization.enterEmail(config.USER_EMAIL);
        instAuthorization.enterPassword(config.USER_PASSWORD);
        instAuthorization.showPassword();
        instAuthorization.login();
        browser.wait(until.presenceOf(instHome.emailLink(), config.WAIT_TIME, 'Login link is not present'));
    })

    afterAll(function() {
        browser.executeScript('window.sessionStorage.clear();'); // clear session
        browser.executeScript('window.localStorage.clear();'); //clear local storage
    })

    it('Client area', function() {
        expect(browser.getCurrentUrl()).toEqual(instHome.url);
        instHome.openDropdown();
        instHome.openProfile();
        browser.wait(until.presenceOf(instProfile.userName(), config.WAIT_TIME, 'User name is not present'));
        expect(browser.getCurrentUrl()).toEqual(instProfile.url);
        expect(instProfile.userName().getText()).toBe(config.USER_NAME);
        expect(instProfile.userEmail().getText()).toBe(config.USER_EMAIL);
        expect(instProfile.userPassword().getText()).toBe('*****');
        expect(instProfile.userPhone().getText()).toBe(config.USER_PHONE);
        expect(instProfile.userAddress().getText()).toBe(config.USER_ADDRESS);
        expect(instProfile.userPin().getText()).toBe(config.USER_PIN);
        expect(instProfile.userNewsLetterOn().isPresent()).toBe(true, "news letter button is set on");
    })
})
