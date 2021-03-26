const fs = require('fs');

// check if command line is well
if (process.argv.length < 3) {
  console.log(chalk.red('Parametres insuffisant'));
  process.exit(1);
}

// if file is a file and if that exist
process.argv.forEach((el, i) => {
  if (i >= 2) {
    if (!fs.existsSync(el)) {
      console.log(chalk.blue(`warning : ${el} n'existe pas.`));
      return;
    }
    const stats = fs.statSync(el);
    if (!stats.isFile()) {
      console.log(chalk.blue(`warning : ${el} pas un fichier.`));
    }
  }
});
