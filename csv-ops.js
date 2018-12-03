let fs = require('fs');
let csv = require('fast-csv');

// let mysql = require('mysql');
// let dbconfig = require('../config/database');
// let connection = mysql.createConnection(dbconfig.connection);

var stream = fs.createReadStream("./csv-files/lumen-refdomains.csv");

let refDomains = [];

var csvStream = csv()
    .on("data", function(data){
         console.log(data);
         let refDomainObj = {};
         refDomainObj['domain'] = data[3];
         refDomainObj['domainTrustScore'] = data[2];
         
         refDomains.push(refDomainObj);

	})
    .on("end", function(){
         console.log("done");
         console.log('refDomains Array: ', refDomains);
    });
 
stream.pipe(csvStream);

