const fs = require("fs");
const path = require("path");

function loadModuler(filename, module, require) {
  var wrapperSrc =
    "(function(module,exports,require){" +
    fs.readFileSync(filename, "utf8") +
    "})(module,module.exports,require);";

  eval(wrapperSrc);
}

var require = function (moduleName) {
  console.log("Require invoked for module:" + moduleName);

  var id = require.resolve(moduleName);

  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  var module = {
    exports: {},
    id: id,
  };

  require.cache[id] = module;
  loadModuler(id, module, require);

  return module.exports;
};

require.cache = {};
require.resolve = (moduleName) => {
  const fullPath = path.resolve(__dirname, moduleName);
  if (!fs.existsSync(fullPath)) {
    throw new Error("Module is not found");
  }
  return fullPath;
};

try {
  const myModule = require("./index.js");
  console.log(myModule);
} catch (error) {
  console.log(error.message);
}
