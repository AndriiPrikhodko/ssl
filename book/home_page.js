config = require("../my_config")

homePage = function(){
  openPage : browser.get(config.HOME_URL)
}

homePage.prototype.loginLink = () => element(by.linkText('LOG IN'))
homePage.prototype.emailLink = () => element(by.linkText(config.USER_EMAIL))
homePage.prototype.dropdownButton = () => element(by.css('button[nc-dropdown-trigger="statusOpened"]'))
homePage.prototype.logoutButton = () => element(by.buttonText("Log out"))
homePage.prototype.openDropdown = function(){this.dropdownButton().click()}
homePage.prototype.logout = function(){this.logoutButton().click()}

module.exports = homePage
