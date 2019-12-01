const fs = require("fs");
const path = require("path");
const firstline = require("firstline");
const baseURL = "https://docs.listingslab.com/docs/";

/* 
    Running this under Node will automagically create 3 files containing 
    lists of the markdown in ./docs & overwriting existing files
    ./index.md, ./index.html & ./index.json
*/

async function runProgramme() {
  const jsonList = {
    docs: walk(`./docs`)
  };
  const { docs } = jsonList;
  let liList = ``;
  for (let i = 0; i < docs.length; i++) {
    let title = ``;
    const docPath = docs[i];
    const url = docs[i].replace(`./docs/`, ``).replace(`.md`, ``);
    //   let
    const pathParts = docPath.split(`.`);
    let resourceType = pathParts[pathParts.length - 1];
    if (resourceType === `md` || resourceType === `markdown`) {
      title = await firstline(docs[i]);
      title = title.replace(`#`, ``);
      title = title.replace(`# `, ``);
    } else if (resourceType === `svg`) {
      title = "SVG.";
    } else {
      title = resourceType;
    }
    if (resourceType !== "DS_Store") {
      liList += `<li>
                    <a href="${baseURL}${url}" title="${title}" target="_blank">
                        ${title}
                    </a>
                </li>`;
    }
  }

  let indexHTML = `<ul>${liList}</ul>`;
  //   let indexMarkdown = `Markdown`;
  //   let indexJSON = `JSON`;

  fs.writeFileSync("index.html", indexHTML);
  console.log("index.html completed. Zero defects\n");

  // fs.writeFileSync("index.md", indexMarkdown);
  // fs.writeFileSync("index.json", indexJSON);

  return jsonList;
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

runProgramme();
