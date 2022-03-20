const Fs = require("./Fs");

( async () => {
  Fs.copyFolderRecursiveSync("./.custom-template", "./src/IZOCogs/__CodeGen/cpfiles/");
  console.log("[U][v] Updated files to .custom-template to cpfiles.");
})();