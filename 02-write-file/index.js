const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const helloText = "Hi! I'm waiting for some message..."
const byеText = "Thanks for the chatter. Bye-bye!"

let writer = fs.createWriteStream(path.join(__dirname, 'text.txt'));

writer.on('finish', function () {
	console.log(byеText);
});

const inputInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log(helloText);

inputInterface.on('line', data => {

	if (data.toString() === 'exit') {
		inputInterface.close();
		writer.end();
	} else {
		writer.write(data, 'UTF8');
		writer.write('\n', 'UTF8');
	}

})

inputInterface.on('close', () => {
	writer.end();
});