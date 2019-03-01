const ArgParser = require('argparse').ArgumentParser;

const argParser = new ArgParser({
  addHelp: true
});
argParser.addArgument(
  ['--headless'],
  {
    help: 'Use headless? Defaults to true.'
  }
);

const getArgs = () => {
  const args = argParser.parseArgs();

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

module.exports = {
  getArgs
};