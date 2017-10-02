const wiki = require("wikijs").default;
const cheerio = require("cheerio");
const fs = require("fs");

const paragraphs = [];
wiki()
	.page("Tamam_Shud_case")
	.then(page => page.html())
	.then(data => {
		const $ = cheerio.load(data);
		const text = $(".mw-parser-output")
			.children("p")
			.each((i, elm) => {
				paragraphs[i] = $(elm).text();
			});
		fs.writeFile(
			"somertonManH.js",
			JSON.stringify(paragraphs),
			"utf8",
			function() {
				console.log("File has been written");
			}
		);
	});
