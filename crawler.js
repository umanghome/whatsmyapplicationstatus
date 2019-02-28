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
  await page.click(selectors.login.submit);
  await page.waitForNavigation();

  return page;
}

module.exports = {
  login,
};