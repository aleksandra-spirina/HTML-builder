const fs = require('fs');
const path = require('path');



(function copyDir() {
	const dir = path.join(__dirname, 'files');
	const newDir = path.join(__dirname, 'files-copy');


	fs.mkdir(newDir, { recursive: true }, (err) => {
		if (err) {
			return console.error(err);
		}
	});


	fs.readdir(dir, { withFileTypes: true }, (err, dirList) => {
		dirList.forEach(dirObj => {
			fs.copyFile(path.join(dir, dirObj.name), path.join(newDir, dirObj.name), (err) => {
				if (err) {
					return console.error(err);
				}
			});
		});
	});
})();

