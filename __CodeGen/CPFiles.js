const Fs = require("./Fs");

( async () => {
  Fs.copyFolderRecursiveSync("./src/IZOCogs/__CodeGen/cpfiles/.custom-template", "./");
  console.log("[o] Copied files to .custom-template to root. ");
})();