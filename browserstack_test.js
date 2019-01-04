var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var sleep = require('sleep');
var Q = wd.Q;
 
desiredCaps = {
  'browserstack.user' : 'akosbirmacher1',
  'browserstack.key' : 'xD4vYRrzWyzZFVFCawGd',
  'build' : 'Node iOS',
  'name': 'single_test',
  'device' : 'iPhone 8 Plus',
  'app' : 'bs://e82c02f86c004513690cde310e8efe4a08baa2ae',
  'browserstack.debug' : true
};
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
 
driver
  .init(desiredCaps)
  .then(function () {
    return driver.waitForElementById('hello_button', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (textButton) {
    return textButton.click();
  })
  .then(function () {
    return driver.waitForElementById('bye_button', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .fin(function() { return driver.quit(); })
  .done();