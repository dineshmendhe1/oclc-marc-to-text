var fs = require('fs'),
xml2js = require('xml2js');


var parser = new xml2js.Parser();

fs.readFile('bib-xmloutput.xml', function(err, data){
	//console.log(data);

	parser.parseString(data, function(err, result){
	//console.dir(JSON.stringify(result));
    fs.writeFile('jsonOutput.json', JSON.stringify(result, null, 4), function (err) {
      if (err) return console.log(err);
      console.log('Process completed: > jsonOutput.json');

    });

  });

});
