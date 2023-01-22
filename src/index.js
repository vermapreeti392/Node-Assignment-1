const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  fs.writeFile(fileName, fileContent);
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.readFile(fileName)
  .then(function(result) {
    console.log(""+result);
  })
  .catch(function(error) {
     console.log(error);
  })
  
};
fs.readFile("pre.txt")

const myFileUpdater = async (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent);
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName);
};
fs.writeFile("Preeti.txt", "My name is preeti");
//fs.writeFile("pre.txt", "My name is preeti");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter};