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
    this.readme = '';

    try {
      let modData = JSON.parse(fs.readFileSync(modPath + path.sep + 'package.json', { encoding:'utf8'} ));
      this.description = modData.description;
      this.version = modData.version;
      this.author = parseAuthor(modData.author);
      this.title = modData.title || this.id;
    }
    catch (e) {
      this.title = this.id;
      this.author = parseAuthor(null);
    }

    try {
      this.readme = fs.readFileSync(modPath + path.sep + 'README.md', { encoding:'utf8'} );
    }
    catch(e) {
    }
  }
}

function loadModsFromDir(modsPath) {

  result = [];

  let mods = getModsInDir(modsPath);

  mods.forEach((modPath) => {
    let newMod = loadModFromDir(modsPath + path.sep + modPath);
    result.push(newMod);
  });

  return result;
}

function getModsInDir(modsPath) {

  return fs.readdirSync(modsPath).reduce((mods, fileName) => {
    if(fs.lstatSync(modsPath + path.sep + fileName).isDirectory()) {
      mods.push(fileName);
    }
    return mods;
  }, []);
}

function loadModFromDir(modPath) {
  var id = path.basename(modPath);
  let mod = new Mod(id, modPath);
  return mod;
}

module.exports = {
  Mod: Mod,
  getModsInDir: getModsInDir,
  loadModsFromDir: loadModsFromDir,
  loadModFromDir: loadModFromDir
};