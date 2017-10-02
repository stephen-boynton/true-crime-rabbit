import wiki from "wikijs";
import cheerio from "cheerio";

function getWikiInfo(caseName) {
	return new Promise((resolve, reject) => {
		const paragraphs = [];
		wiki()
			.page(caseName)
			.then(page => page.html())
			.then(data => {
				const $ = cheerio.load(data);
				const text = $(".mw-parser-output")
					.children("p")
					.each((i, elm) => {
						paragraphs[i] = $(elm).text();
					});
				resolve(paragraphs);
			});
	});
}

function getWikiImages(caseName) {
	return new Promise((resolve, reject) => {
		wiki()
			.page(caseName)
			.then(page => page.images())
			.then(images => {
				const imgs = [];
				images.forEach((im, i) => {
					imgs[i] = im;
				});
				resolve(images);
			});
	});
}

export { getWikiInfo, getWikiImages };
