/* 
    Run this with node to create an html file 
    containing a linked list of the docs in this 
    directory for use in Search Marketing
*/

var fs = require("fs");
var path = require("path");

function makeJSON(params) {
  var success = true;
  var result = {
    success,
    params,
    dir: walk(`.`)
  };
  logResult(result);
  fs.writeFileSync("index.html", JSON.stringify(result));
  return result;
}

var walk = function(dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + "/" + file;
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
};

function logResult(result) {
  console.log("\n");
  console.log(result);
  console.log("\n");
}

makeJSON(`please makeHTML`);
