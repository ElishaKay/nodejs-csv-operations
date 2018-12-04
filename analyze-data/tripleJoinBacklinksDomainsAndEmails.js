let fs = require('fs');
const allBacklinks = require('../output/backlinksAndDomains.js');
const refDomains = require('../output/refDomains');
const newArr = [];

allBacklinks.forEach(function (backlinkRecord) {
    let sourceUrl = backlinkRecord['sourceUrl'];

    refDomains.forEach(function (refDomainRecord) {
    	let domain = refDomainRecord['domain'];

    	if(sourceUrl.includes(domain)){
			let domainTrustScore = refDomainRecord['domainTrustScore'];
    		let pageTrustScore = backlinkRecord['pageTrustScore'];
    		let sourceTitle = backlinkRecord['sourceTitle'];

    		newArr.push(
    			{sourceUrl, 
    			 domain,
    			 domainTrustScore,
    			 pageTrustScore,
    			 sourceTitle
    			}
    		)
    	}
    });
    
});

console.log('newArr.length(): ', newArr.length);

fs.writeFile('../output/backlinksAndDomains.js', JSON.stringify(newArr), function(err, newArr){
            if (err) console.log(err);
            console.log("Successfully Written to File.");
});