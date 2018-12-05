let fs = require('fs');
let alasql = require('alasql');

const backlinksAndDomains = require('../output/backlinksAndDomains.js');
const ftlResults = require('../output/ftlResults');

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

ftlResults.sort(compare);

let newArr = alasql('SELECT * \
            FROM ? arrA JOIN ? arrB USING domain', [backlinksAndDomains, ftlResults]);

// source: https://stackoverflow.com/questions/39885893/how-to-find-duplicate-values-in-a-javascript-array-of-objects-and-output-only-u
newArr = newArr.filter((set => f => !set.has(f.email) && set.add(f.email))(new Set));

console.log('newArr: ', newArr);

console.log('newArr.length(): ', newArr.length);



// fs.writeFile('../output/backlinksDomainsAndEmails.js', JSON.stringify(newArr), function(err, newArr){
//             if (err) console.log(err);
//             console.log("Successfully Written to File.");
// });