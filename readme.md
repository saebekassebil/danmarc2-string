# danmarc2-string

Parses and converts a danMARC2 string to Unicode according to
[annex K](http://www.kat-format.dk/danMARC2/Danmarc2.bilagK.htm) in the
danMARC2 format description.

## example
```js
var dm2string = require('danmarc2-string');

dm2string('Actualit@00e9s') === 'Actualités';
dm2string('245 00 *a L\'¤étranger intimement connu') === 
 '245 aa *a l\'¤étranger intimement connu') 
```
