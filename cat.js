const fs = require('fs');
const { readFileSync } = require('fs');
const chalk = require('chalk');

// check if command line is well
if (process.argv.length <= 2) {
  console.log(chalk.red('parametres insuffisant'));
  process.exit(1);
}

// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.blue(`warning : ${process.argv[2]} n'existe pas.`));
  process.exit(1);
}

//check if the value is a file or a directory (you choose)

//loop in array
process.argv.forEach((el, i) => {
  if (i >= 2) {
    const stats = fs.statSync(el);
    if (!stats.isFile()) {
      console.log(chalk.blue(`warning : ${el} pas un fichier.`));
    } else {
      const txt = readFileSync(el, 'utf-8');
      console.log(txt);
    }
  }
});
