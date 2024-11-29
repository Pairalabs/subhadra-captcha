'use strict';
const path = require('path');
const opentype = require('opentype.js');
const charPreset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const fontPath = path.join(__dirname, '../fonts/Comismsh.ttf');
const font = opentype.loadSync(fontPath);
const ascender = font.ascender;
const descender = font.descender;

const options = {
	width: 130,
	height: 50,
	noise: 4,
	color: false,
	background: '',
	size: 4,
	ignoreChars: '',
	fontSize: 56,
    isBase64:false,
	charPreset, font, ascender, descender
};

const loadFont = filepath => {
	const font = opentype.loadSync(filepath);
	options.font = font;
	options.ascender = font.ascender;
	options.descender = font.descender;
};

module.exports = {
	options, loadFont
};
