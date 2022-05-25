const fs = require('fs');
const path = require('path');

const writer = fs.createWriteStream(path.join(__dirname, 'project-dist/bundle.css'));
const dir = path.join(__dirname, 'styles');

writer.on('finish', function () {
	console.log('end');
});

fs.readdir(dir, { withFileTypes: true }, (err, dirList) => {
	dirList.forEach(dirObj => {
		if (dirObj.isFile()) {
			if (path.extname(dirObj.name) === '.css') {

				let output = new fs.ReadStream(path.join(dir, dirObj.name), { encoding: 'utf-8' })

				output.on('readable', () => {
					let data = output.read();
					if (data) {
						writer.write(data);
					}
				});
			}
		}
	});
});


// как корректно закрыть поток записи?
// writer.close();

