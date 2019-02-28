const puppeteer = require('puppeteer');
const Config = require('./config');
const Crawler = require('./crawler');
const Status = require('./status');

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const statuses = [];

  for (let i = 0; i < Config.colleges.length; i++) {
    const config = Config.colleges[i];
    const page = await Crawler.login(browser, config);
    const status = await Crawler.info(page, config);

    await page.close();

    statuses.push(Status.createStatus(status, config));
  }

  await browser.close();
  console.table(statuses);
}

main();