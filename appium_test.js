const wdio = require("webdriverio");

const opts = {
    port: 4723,
    desiredCapabilities: {
        platformName: "iOS",
        platformVersion: "12.1",
        deviceName: "iPhone 7",
        app: "/Users/akosbirmacher/Develop/Xcode/github/app/sample-apps-ios-appium.app",
        automationName: "XCUITest",
    }
  };

  const client = wdio.remote(opts);

  client
  .init()
  .click("~App")
  .click("~Alert Dialogs")
  .back()
  .back()
  .end();