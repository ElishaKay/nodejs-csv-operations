let fs = require('fs');
let csv = require('fast-csv');

var stream = fs.createReadStream("../csv-files/lumen-ftl-results.csv");

let newArr = [];

var csvStream = csv()
    .on("data", function(data){
         console.log(data);
         let ftlResultsObj = {};
         ftlResultsObj['domain'] = data[0];
         ftlResultsObj['email'] = data[1];
         ftlResultsObj['name'] = data[2];
         
         newArr.push(ftlResultsObj);

	})
    .on("end", function(){
         console.log("done");
         console.log('Results from FTL: ', newArr);
         fs.writeFile('../output/ftlResults.js', JSON.stringify(newArr), function(err, newArr){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
         });
    });
 
stream.pipe(csvStream);

