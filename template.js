const fs = require('fs')

// check if command line is well 
if (process.argv.length !== /*mettre la valeur souhaité*/) {
  console.log(/*commentaire*/)
  process.exit(1)
}

// check if the path exist
if (!fs.existsSync(process.argv[/*value*/])) {
  console.log(`Désoler ${process.argv[/*value*/]} n\'existe pas`)
  process.exit(1)
}

//check if the value is a file or a directory (you choose)
const stats = fs.statSync(process.argv[/*value*/])

if (!stats.isFile(process.argv[/*value*/])) {
  console.log(`${process.argv[/*value*/]} n\'est pas un fichier`)
  process.exit(1)
}

if (!stats.isDirectory(process.argv[/*value*/]) {
  console.log(`${process.argv[/*value*/]} n\'est pas un dossier`)
  process.exit(1)
}