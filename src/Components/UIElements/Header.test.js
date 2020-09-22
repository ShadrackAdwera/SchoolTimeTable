const puppeteer = require('puppeteer'); 

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1980,1080']
    })
    page = await browser.newPage()
})

describe('Authentication', () => {
  test('users can login', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.signin-button');
    await page.click('Button')
    await page.waitForSelector('.add-lesson')
    await page.click('Button')
  }, 160000);
});

afterAll(() => {
  browser.close()
})