const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

    this.page = await this.browser.newPage();
})

When('open the Google page', async function () {
    await this.page.goto("https://google.com")
});

When('search for chercher tech', async function () {
    await this.page.waitForSelector("[name='q']")
    await this.page.type("[name='q']", "sondos")
//     await this.page.click("[name='btnK']")
    await this.page.keyboard.press("Enter")
});

Then('Count the results', async function () {
//     var linkTexts = await this.page.$$eval(".plan-features a",
//                 elements=> elements.map(item=>item.textContent))
    // prints a array of text
//     console.log("here",linkTexts.length)
    await this.browser.close()

    //uncomment close statement if you want
   
});
