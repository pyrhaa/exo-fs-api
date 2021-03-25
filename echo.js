const chalk = require('chalk');

// check if command line is well
if (process.argv.length < 3) {
  console.log(chalk.red('Parametres insuffisant'));
  process.exit(1);
}

let str = '';

process.argv.forEach((el, index) => {
  if (index >= 2) {
    str += el;
    str += ' ';
  }
});
console.log(str);
