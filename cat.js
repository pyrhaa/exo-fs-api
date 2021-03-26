const fs = require('fs');
const { readFileSync } = require('fs');
const chalk = require('chalk');

// check if command line is well
if (process.argv.length <= 2) {
  console.log(chalk.red('parametres insuffisant'));
  process.exit(1);
}

// check if the path exist
// if (!fs.existsSync(process.argv[2])) {
//   console.log(chalk.blue(`warning : ${process.argv[2]} n'existe pas.`));
//   process.exit(1);
// }

//loop in array and verifications
process.argv.forEach((el, i) => {
  if (i >= 2) {
    if (!fs.existsSync(el)) {
      console.log(chalk.blue(`warning : ${el} n'existe pas.`));
      return;
    }
    const stats = fs.statSync(el);
    if (!stats.isFile()) {
      console.log(chalk.blue(`warning : ${el} pas un fichier.`));
    } else {
      const txt = readFileSync(el, 'utf-8');
      console.log(txt);
    }
  }
});
