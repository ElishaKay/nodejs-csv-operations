let fs = require('fs');
let csv = require('fast-csv');

var stream = fs.createReadStream("../csv-files/lumen-refdomains.csv");

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
         fs.writeFile('temp.txt', JSON.stringify(refDomains), function(err, refDomains){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    });
 
stream.pipe(csvStream);

