const fs = require('fs');
const path = require('path');

let output = new fs.ReadStream(path.join(__dirname, 'text.txt'), { encoding: 'utf-8' })

output.on('readable', () => {
	let data = output.read();
	console.log((data == null) ? '' : data);
});
