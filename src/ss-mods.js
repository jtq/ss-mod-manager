var fs = require('fs');
var path = require('path');

function parseAuthor(data) {
  var structured = {};
  if(!data || typeof data !== 'object') {
    if(typeof data === 'string') {
      let matches = data.match(/([^<]+)<?([^<]*)>?/);
      structured.name = matches[0];
      structured.email = matches[1];
      structured.url = null;
    }
    else {
      structured.name = null;
      structured.email = null;
      structured.url = null;
    }
  }
  else {
    structured.name = data.name || null;
    structured.email = data.email || null;
    structured.url = data.url || null;
  }

  return structured;
}

class Mod {

  constructor(id, modPath) {
    this.id = id;
    this.path = modPath;
    this.description = '';
    this.version = '';
    this.author = '';
    this.title = '';

    try {
      let modData = JSON.parse(fs.readFileSync(modPath + path.sep + 'package.json'));
      this.description = modData.description;
      this.version = modData.version;
      this.author = parseAuthor(modData.author);
      this.title = modData.title || this.id;
    }
    catch (e) {
      this.title = this.id;
      this.author = parseAuthor(null);
    }
  }
}

function loadModsFromDir(modsPath, console) {

  result = [];

  let files = fs.readdirSync(modsPath);

  files.forEach((fileName) => {
    let newMod = loadModFromDir(modsPath + path.sep + fileName, console);
    result.push(newMod);
  });

  return result;
}

function loadModFromDir(modPath) {
  var id = path.basename(modPath);
  let mod = new Mod(id, modPath, console);
  return mod;
}

module.exports = {
  Mod: Mod,
  loadModsFromDir: loadModsFromDir,
  loadModFromDir: loadModFromDir
};