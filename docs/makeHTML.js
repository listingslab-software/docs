/* 
    Run this with node to create an html file 
    containing a linked list of the docs in this 
    directory for use in Search Marketing
*/

var fs = require("fs");
var path = require("path");
// https://docs.listingslab.com/docs/
var baseURL = "https://.../docs/";

function makeHTML(params) {
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
    fileStr = file.toString();
    fileStr = fileStr.substring(2, fileStr.length);
    fileStr = fileStr.substring(0, fileStr.length - 3);
    html = "<li>" + baseURL + fileStr + "</li>\n\n";
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(html);
    }
  });
  return results;
};

function logResult(result) {
  console.log("\n");
  console.log(result);
  console.log("\n");
}

makeHTML(`Please makeHTML`);
