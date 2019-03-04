const login = async (browser, config) => {
  const {
    credentials,
    pages,
    selectors,
  } = config;

  const page = await browser.newPage();

  await page.goto(pages.login);

  await page.type(selectors.login.username, credentials.username);
  await page.type(selectors.login.password, credentials.password);
  page.click(selectors.login.submit);
  await page.waitForNavigation();

  return page;
}

const info = async (page, config) => {
  const {
    pages,
    selectors,
  } = config;

  if (page.url() !== pages.info) {
    await page.goto(pages.info);
  }

  const element = await page.$(selectors.info.status);
  const text = await page.evaluate(element => element.textContent, element);

  return text;
}

module.exports = {
  info,
  login,
};
