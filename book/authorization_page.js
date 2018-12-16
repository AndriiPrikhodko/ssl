config = require('../my_config')

AuthorizationPage = function(){
    authorizationPage = "/authorize";
}

AuthorizationPage.prototype.emailField = () => element(by.model('form.email'));
AuthorizationPage.prototype.passwordField = () => element(by.model('form.password'));
AuthorizationPage.prototype.buttonLogin = () => element.all(by.css('button[type="submit"]')).first();
AuthorizationPage.prototype.emailErrorBox = () => element(by.xpath('// div [@ng-show = "(authForm.email.$dirty || authForm.$submitted) && authForm.email.$error.required"]'));
AuthorizationPage.prototype.passwordErrorBox = () => element(by.xpath('// div [@ng-show ="(authForm.password.$dirty || authForm.$submitted) && authForm.password.$error.required"]'));
AuthorizationPage.prototype.eyeButton = () => element(by.css('[ng-click="showPassword = !showPassword"]'));
AuthorizationPage.prototype.enterEmail = function(userEmail) {this.emailField().sendKeys(userEmail)};
AuthorizationPage.prototype.enterPassword = function(userPassword) {this.passwordField().sendKeys(userPassword)};
AuthorizationPage.prototype.showPassword = function() {this.eyeButton().click()};
AuthorizationPage.prototype.login = function() {this.buttonLogin().click()};

module.exports = AuthorizationPage;
