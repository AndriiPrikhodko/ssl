config = require('../my_config')

HomePage = function() {
    this.url = 'https://www.ssls.com/';
}

HomePage.prototype.openPage = function() {browser.get(config.HOME_URL)};
HomePage.prototype.loginLink = () => element(by.linkText('LOG IN'));
HomePage.prototype.emailLink = () => element(by.linkText(config.USER_EMAIL));
HomePage.prototype.dropdownButton = () => element(by.css('button[nc-dropdown-trigger="statusOpened"]'));
HomePage.prototype.logoutButton = () => element(by.buttonText("Log out"));
HomePage.prototype.profileButton = () => element(by.linkText('View profile'));
HomePage.prototype.openDropdown = function() {this.dropdownButton().click()};
HomePage.prototype.logout = function() {this.logoutButton().click()};
HomePage.prototype.openProfile = function() {this.profileButton().click()};

module.exports = HomePage;
