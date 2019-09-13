var fs = require('fs');
var args = process.argv.slice.(2); /* Nu kommer det komma en array av alla argument efter defaulterna */

var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var file = fs.readFileSync('data/' + argv.file, 'utf8'); 
