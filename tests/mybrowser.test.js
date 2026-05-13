test('After pushing a value it should appear as top of stack', async () => {
    let push = await driver.findElement(By.id('push'));
    await push.click();
    let alert = await driver.switchTo().alert();
    await alert.sendKeys("Testvalue");
    await alert.accept();
    let top = await driver.findElement(By.id('top_of_stack')).getText();
    expect(top).toEqual("Testvalue");
});