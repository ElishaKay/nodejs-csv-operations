var res1 = alasql('SELECT arrA.name, arrB.location, arrA.href, arrB.hidden \
            FROM ? arrA JOIN ? arrB USING name', [arrA,arrB]);
