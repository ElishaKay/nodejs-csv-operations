let fs = require('fs');
let alasql = require('alasql');

const backlinksAndDomains = require('../output/backlinksAndDomains.js');
const ftlResults = require('../output/ftlResults');

let newArr = alasql('SELECT * \
            FROM ? arrA JOIN ? arrB USING domain', [backlinksAndDomains, ftlResults]);


console.log('newArr.length(): ', newArr.length);

fs.writeFile('../output/backlinksDomainsAndEmails.js', JSON.stringify(newArr), function(err, newArr){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
});