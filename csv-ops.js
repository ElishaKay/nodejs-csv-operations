let fs = require('fs');
let csv = require('fast-csv');

let mysql = require('mysql');
let dbconfig = require('../config/database');
let connection = mysql.createConnection(dbconfig.connection);

var stream = fs.createReadStream("../csv-files/ako-dice.csv");
 
var csvStream = csv()
    .on("data", function(data){
         console.log(data);
         let profile_id = data[1];
         let user_name = data[2];
         let user_email = data[3];
         let shipping_country = data[4];
         let pledge_shipping_cost = data[5];
         let perk_title = data[6];         
         let pledge_amount = data[7];
         let pledge_date = data[8];
         let shipping_name = data[13];


         if(pledge_amount.includes('$')){
             
                
         }


	})
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);
