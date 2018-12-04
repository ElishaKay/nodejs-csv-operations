let fs = require('fs');
let alasql = require('alasql');

const backlinksAndDomains = require('../output/backlinksAndDomains.js');
const ftlResults = require('../output/ftlResults');
let newArr = [];

ftlResults.forEach(function (emailRecord) {
    let emailDomain = emailRecord['domain'];

    backlinksAndDomains.forEach(function (linkRecord) {
        let linkDomain = linkRecord['domain'];

        if(linkDomain === emailDomain){
            let sourceUrl = linkRecord['sourceUrl'];
            let domainTrustScore = linkRecord['domainTrustScore'];
            let pageTrustScore = linkRecord['pageTrustScore'];
            let sourceTitle = linkRecord['sourceTitle'];

            newArr.forEach(function (alreadyAddedRecord) {
                if(emailRecord['email'] === alreadyAddedRecord['email'] ){
                    return;
                } else {
                    newArr.push(
                        {domain: linkDomain,
                         sourceUrl, 
                         domainTrustScore,
                         pageTrustScore,
                         sourceTitle
                        }
                    )
                }

                
            })
        }
    });
    
});

console.log('newArr.length(): ', newArr.length);

// fs.writeFile('../output/backlinksDomainsAndEmails.js', JSON.stringify(newArr), function(err, newArr){
//             if (err) console.log(err);
//             console.log("Successfully Written to File.");
// });