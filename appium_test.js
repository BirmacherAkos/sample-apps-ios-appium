const wdio = require("webdriverio");

const opts = {
    port: 4723,
    desiredCapabilities: {
        platformName: "iOS",
        platformVersion: "12.1",
        deviceName: "iPhone 7",
        app: "/Users/vagrant/git/ddata/Build/Products/Debug-iphoneos/sample-apps-ios-appium.app",
        automationName: "XCUITest",
    }
  };

  const client = wdio.remote(opts);

  client
  .init()
  .setValue('~top_textfield', '12')
  .setValue('~bottom_textfield', '13')
  .click('~add_button')
  .waitForVisible('~clear_button', 5000, false, function(result) {
    console.log(result)
  }).click('~clear_button');

  