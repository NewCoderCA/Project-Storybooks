// const { Builder } = require("selenium-webdriver");
// const safari = require("selenium-webdriver/safari");

// let options = new safari.Options();
// var driver = async function () {
//   console.log(driver);
//   await new Builder().forBrowser("safari").setSafariOptions(options).build();

//   await driver.quit();
// };
// console.log(driver);
// exports.driver = driver;

const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("safari").build();
  try {
    await driver.get("http://www.google.com/ncr");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 20000);
  } finally {
    console.log();
    await driver.quit();
  }
})();
