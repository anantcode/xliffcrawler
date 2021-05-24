//This script reads the given M
//modify the following
let xmlFilePath = './translations_cs_CZ.xml';


let convert = require('xml-js');
let xml = require('fs').readFileSync(xmlFilePath, 'utf8');

let result = convert.xml2json(xml, {compact: true, spaces: 4});
//console.log(result);

let obj = JSON.parse(result);
//console.log(Object.keys(obj));

let arr = obj.xliff.file.body['trans-unit'];
//console.log(typeof obj.xliff.file.body['trans-unit']);

let winnerLength = 0;
let winnerStr = "";

let winnerLength2 = 0;
let winnerStr2 = "";

console.log("\n\nTotal Number of Strings in File: "+arr.length);

for(let i=0; i<arr.length; i++){
	//let str = arr[i].target._text;         //TODO: this is for the translated string
	let str = arr[i].source._text;			 //TODO: this is for the english string

	//console.log(str + "\n");
	if(str.length > winnerLength){
		winnerStr = str;
		winnerLength = str.length;
	}

	if(str.length < winnerLength && str.length > winnerLength2){
		winnerStr2 = str;
		winnerLength2 = str.length;
	}
}

console.log("\n\nLongest string:\n");
console.log("Length: "+winnerLength);
console.log("String:\n"+winnerStr);

console.log("\n\nSecond longest string:\n");
console.log("Length: "+winnerLength2);
console.log("String:\n"+ winnerStr2);