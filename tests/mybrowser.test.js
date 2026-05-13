const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
let driver;
jest.setTimeout(1000 * 60 * 5);

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
});

test('After pushing a value it should appear as top of stack', async () => {
    let push = await driver.findElement(By.id('push'));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Testvalue");
    await alert.accept();
    let top = await driver.findElement(By.id('top_of_stack')).getText();
    expect(top).toEqual("Testvalue");
});