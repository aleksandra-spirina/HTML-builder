// Из-за подготовки к сдаче курсовой работы, не успела выполнить задание вовремя :(
// Уважаемый проверющий, если несложно, вернитесь к моей работе позже. 
// За 24-25 мая собираюсь доделать. Спасибо!

const fs = require('fs');
const path = require('path');

let output = new fs.ReadStream(path.join(__dirname, 'text.txt'), { encoding: 'utf-8' })

output.on('readable', () => {
	let data = output.read();
	console.log((data == null) ? '' : data);
});
