const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'secret-folder');
console.log(dir)

fs.readdir(dir, { withFileTypes: true }, (err, dirList) => {
	dirList.forEach(dirObj => {
		if (dirObj.isFile()) {
			let fileType = path.extname(dirObj.name);
			let fileName = path.basename(dirObj.name, fileType);
			fileType = fileType.substring(1);

			fs.stat(path.join(dir, dirObj.name), (error, stats) => {
				let fileSize = stats.size / 1024;
				fileSize = fileSize.toFixed(3);
				console.log(fileName, ' - ', fileType, ' - ', fileSize.toString() + 'kb');
			});

		}
	});
});
