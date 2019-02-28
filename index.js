const ArgParser = require('argparse').ArgumentParser;
const puppeteer = require('puppeteer');
const Config = require('./config');
const Crawler = require('./crawler');
const Status = require('./status');

const argParser = new ArgParser({
  addHelp: true
});
argParser.addArgument(
  ['--headless'],
  {
    help: 'Use headless? Defaults to true.'
  }
);

const parseArgs = args => {
  let headless = true;

  if (args.headless) {
    if (args.headless.toLowerCase() === 'false') {
      headless = false;
    }
  }

  return {
    headless
  }
}

const args = parseArgs(argParser.parseArgs());

const main = async () => {

  const browser = await puppeteer.launch({
    headless: args.headless
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