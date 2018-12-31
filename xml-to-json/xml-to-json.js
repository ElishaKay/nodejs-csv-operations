var convert = require('xml-js');
var xml =
`<data>
<status>ok</status>
<domain>hayesvalleymed.com</domain>
<more>http://www.semrush.com/us/info/hayesvalleymed.com</more>
<rank>590119</rank>
<keywords>2064</keywords>
<traffic>1330</traffic>
<costs>3789</costs>
</data>`;
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result1, '\n', result2);