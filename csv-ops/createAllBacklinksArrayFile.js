let fs = require('fs');
let csv = require('fast-csv');

var stream = fs.createReadStream("../csv-files/lumen-all-backlinks.csv");

let allBacklinksArr = [];

var csvStream = csv()
    .on("data", function(data){
         console.log(data);
         let allBacklinksObj = {};
         allBacklinksObj['pageTrustScore'] = data[1];
         allBacklinksObj['sourceTitle'] = data[2];
         allBacklinksObj['sourceUrl'] = data[3];
         
         allBacklinksArr.push(allBacklinksObj);

	})
    .on("end", function(){
         console.log("done");
         console.log('allBacklinks Array: ', allBacklinksArr);
         fs.writeFile('../output/allBacklinks.txt', JSON.stringify(allBacklinksArr), function(err, allBacklinksArr){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
    });
 
stream.pipe(csvStream);

