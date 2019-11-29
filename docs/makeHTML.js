/* 
    Run this with node to create an html file 
    containing a linked list of the docs in this 
    directory for use in Search Marketing
*/

var fs = require("fs");
var path = require("path");
var baseURL = "https://docs.listingslab.com/docs/";

function makeHTML(params) {
  var result = {
    docs: walk(`.`)
  };
  var resultHTML = "<ul>List</ul>";
  logResult(result);

  fs.writeFileSync("index.html", resultHTML);
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
    html = "<li>" + baseURL + fileStr + "</li>";
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
