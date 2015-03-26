var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
contents = contents.toString();
var lines = contents.split('\\n');
var answer = lines.length - 1;
console.log(answer);