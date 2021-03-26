const fs = require('fs');
const { copyFileSync } = require('fs');

// check if command line is well
if (process.argv.length !== 4) {
  console.log('usage: cp.js exempleFile.txt to CopyExempleFile.txt');
  process.exit(1);
}

// check if the path exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désoler ${process.argv[2]} n\'existe pas`);
  process.exit(1);
}

//check if the value is a file or a directory (you choose)
const stats = fs.statSync(process.argv[2]);

if (!stats.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file or directory`);
  process.exit(1);
}

// copie original.txt vers copy.txt
const cp = copyFileSync(process.argv[2], process.argv[3]);
