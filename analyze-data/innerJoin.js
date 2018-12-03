const allBacklinks = require('../output/allBacklinks');
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