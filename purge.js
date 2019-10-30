const path = require("path");
const fs = require("fs");

const namesToRemove = process.argv.slice(2);

const peoplesPath = path.join(__dirname, "peoples");

if (!namesToRemove.length) {
  fs.readdirSync(peoplesPath).forEach(file => {
    if (file.indexOf('mazipan.js') < 0) { 
      fs.unlinkSync(path.join(peoplesPath, file))
    }
  });

  fs.rmdirSync(peoplesPath);
} else {
  namesToRemove.forEach(name => {
    try {
      fs.unlinkSync(path.join(peoplesPath, `${name}.js`));
    } catch (e) {
      console.error(`Error deleting file for name: ${name}`);
    }
  });

  fs.rmdirSync(peoplesPath);
}
