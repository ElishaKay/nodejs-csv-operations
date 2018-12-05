let fs = require('fs');
let alasql = require('alasql');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const backlinksAndDomains = require('../output/backlinksAndDomains.js');
const ftlResults = require('../output/ftlResults');

function compare(a,b) {
  if (a.name > b.name)
    return -1;
  if (a.name < b.name)
    return 1;
  return 0;
}

let newArr = alasql('SELECT * \
            FROM ? arrA JOIN ? arrB USING domain', [backlinksAndDomains, ftlResults]);

// bring records with names to the top
newArr.sort(compare);

// remove duplicate email records
// source: https://stackoverflow.com/questions/39885893/how-to-find-duplicate-values-in-a-javascript-array-of-objects-and-output-only-u
newArr = newArr.filter((set => f => !set.has(f.email) && set.add(f.email))(new Set));

//create csv File
newArr = convertArrayToCSV(newArr);

console.log('newArr: ', newArr);

console.log('newArr.length(): ', newArr.length);

fs.writeFile('../output/final.csv', JSON.stringify(newArr), function(err, newArr){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
});