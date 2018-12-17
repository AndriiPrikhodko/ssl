config = require('../my_config');

ProfilePage = function() {
    this.url = 'https://www.ssls.com/user/profile';
}

ProfilePage.prototype.userName = () => element(by.css('span[ng-hide="activeRow === \'name\'"]'));
ProfilePage.prototype.userEmail = () => element(by.css('span[ng-hide="activeRow === \'email\'"]'));
ProfilePage.prototype.userPassword = () => element(by.css('span[ng-hide="activeRow === \'password\'"]'));
ProfilePage.prototype.userPhone = () => element(by.css('span[ng-hide="activeRow === \'phone\'"]'));
ProfilePage.prototype.userAddress = () => element.all(by.css('span[ng-hide="activeRow === \'address\'"]')).first();
ProfilePage.prototype.userPin = () => element(by.xpath('// div [@ng-class="{disabled: activeRow !== \'pin\' '+
                                                      '&& activeRow !== \'all\'}"] / div[2]'));
ProfilePage.prototype.userNewsLetterOn = () => element(by.xpath('// div [@ng-class="{disabled: activeRow !== '+
                                                                '\'newsletter\' && activeRow !== \'all\'}"] // '+
                                                                'button [@class="toggle-btn on"]'));

module.exports = ProfilePage;
