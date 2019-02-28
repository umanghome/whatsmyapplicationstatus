const puppeteer = require('puppeteer');
const Config = require('./config');
const Crawler = require('./crawler');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  for (let i = 0; i < Config.colleges.length; i++) {
    const config = Config.colleges[i];
    const page = await Crawler.login(browser, config);
    const status = await Crawler.info(page, config);

    await page.close();
  }
}

main();