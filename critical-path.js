'use strict';

const glob     = require('glob');
const critical = require('critical');
const config   = require('./package.json').config;

function generateCriticalPath(err, files) {
	if (err) throw err;

	files.forEach((file, index) => {
		const page = file.split('./').pop();

		critical.generate({
			inline: true,
			minify: true,
			base: './',
			src: page,
			dest: './critical-' + page ,
			width: 1300,
			height: 900
		});
	});
}

glob(`./*.html`, generateCriticalPath);
