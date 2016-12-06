var xml2js = require('xml2js');
fs = require('fs'),
parser = new xml2js.Parser();
fs.readFile( 'bib-xmloutput.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        recordx = result.collection.record;
        var ocmdat = "";
        var ocmdatmul = "";
        fs.writeFile("output.txt", "", function(err) {
		    if(err) {
		        return console.log(err);
		    }
		}); 
        recordx.forEach(function(indata){
        	controlfielddata = indata.controlfield;
        	controlfielddata.forEach(function(dataIn){
        		if(dataIn.$.tag == "001"){
	        		ocmdat = dataIn._;
        		}

        	});
        	datafielddata = indata.datafield;
        	datafielddata.forEach(function(dataIn){
        		if(dataIn.$.tag == "049"){
        			subfieldData = dataIn.subfield;
        			subfieldData.forEach(function(subfieldIndata){
        				ocmdatmul = ocmdat+subfieldIndata._;
        				console.log(ocmdatmul);
        				fs.appendFile('output.txt', ocmdatmul+'\n', function (err) {

						});
        			});
        		}
        	});
        });
	});
});