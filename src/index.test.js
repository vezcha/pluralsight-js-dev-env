var fs = require('fs');
//var pathDirname = require('path-dirname');
var chai = require('chai'); 
var jsdom = require('jsdom');

//console.log(expect);
//console.log(jsdom);
//console.log(fs);
//console.log(pathDirname);
//const pathName = __dirname +"/index.html";

describe('Our first test', () => {
	it('should pass', () => {
		chai.expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('should have h1 says Users', (done) => {
		
		const index = fs.readFileSync(__dirname +"/index.html","utf-8");
		
		jsdom.env(index, function(err, window){
			const h1 = window.document.getElementsByTagName('h1')[0];
			chai.expect (h1.innerHTML).to.equal("Users");
			done();
			window.close();
		});
		
	})
});