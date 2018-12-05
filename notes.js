To run with Chrome Dev Console. 

```
node --inspect server
```

Step 2: Open Dev Console and you will see the NodeJS icon on the top-left and the logs there.

--------------

var res1 = alasql('SELECT arrA.name, arrB.location, arrA.href, arrB.hidden \
            FROM ? arrA JOIN ? arrB USING name', [arrA,arrB]);

Json Beautifier:

Press: "Ctrl-Alt-J", (may need to highlight text at times)

https://packagecontrol.io/packages/Pretty%20JSON