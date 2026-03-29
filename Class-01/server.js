const fs = require('fs');

function createFile(fileName, fileContent) {
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File Created Successfully!");
        }
    });
}

function readFile(fileName) {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}