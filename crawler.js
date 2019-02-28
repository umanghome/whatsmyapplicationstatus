const login = async (browser, config) => {
  const page = await browser.newPage();

  await page.goto(config.pages.login);

  return page;
}

module.exports = {
  login,
};