const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const helloText = "Hi! I'm waiting for some message..."
const byеText = "Thanks for the chatter. Bye-bye!"

let writer = fs.createWriteStream(path.join(__dirname, 'text.txt'));

writer.write('data','UTF8');
// writer.end();/* w  w  w.j av  a  2s .c o m*/

writer.on('finish',function(){
  console.log("finished");
});

writer.on('error',function(err){
  console.log(err.stack);
});


const inputInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// writer.write("text", 'UTF8');
// writer.end();

let all_text = '';

inputInterface.on('line', data => {
	let text = data.toString();
	writer.write(data, 'UTF8');
	// all_text.concat(data);

	if (text === 'exit') {
		console.log(byеText);
		console.log(all_text)
		inputInterface.close();
		writer.end();
		}
})

// console.log(all_text)

// inputInterface.question(helloText, function (answer) {
// 	writer.write(answer);
// 	console.log("Closing the interface");
// 	inputInterface.close();
// 	writer.close()
// });
