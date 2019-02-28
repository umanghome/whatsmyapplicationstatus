const puppeteer = require('puppeteer');
const config = require('./config');
const crawler = require('./crawler');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  for (let i = 0; i < config.colleges.length; i++) {
    const page = await crawler.login(browser, config.colleges[i]);
  }
}

main();