config = require("../my_config")
authorizationPage = function(){
  authorizationPage = "/authorize"
}

authorizationPage.prototype.emailField = () => element(by.model('form.email'))
authorizationPage.prototype.passwordField = () => element(by.model('form.password'))
authorizationPage.prototype.buttonLogin = () => element.all(by.css('button[type="submit"]')).first()
authorizationPage.prototype.eyeButton = () => element(by.css('[ng-click="showPassword = !showPassword"]'))
authorizationPage.prototype.enterEmail = function(userEmail){this.emailField().sendKeys(userEmail)}
authorizationPage.prototype.enterPassword = function(userPassword){this.passwordField().sendKeys(userPassword)}
authorizationPage.prototype.showPassword = function(){this.eyeButton().click()}
authorizationPage.prototype.login = function(){this.buttonLogin().click()}

module.exports = authorizationPage
