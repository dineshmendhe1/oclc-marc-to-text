'use strict';
var marc = require('../lib/marcjs'),
    fs   = require('fs');



var reader = new marc.getReader(fs.createReadStream('../sample_files/20110513.marc'), 'iso2709');
var writer = new marc.MarcxmlWriter(fs.createWriteStream('bib-xmloutput.xml'));
marc.getWriter(process.stdout, 'iso2709');
reader.pipe(writer);

//var reader = new marc.MarcxmlReader(fs.createReadStream('test/data/bib.xml'));
//var writer = new marc.JsonWriter(fs.createWriteStream('test/data/bib-out.xml'));
//var writer = new marc.MiJWriter(fs.createWriteStream('test/data/bib-out.mij'));

/*reader.on('data', function(record) {
    record.find([ '001', '049']);
          
    writer.write(record);
    console.log('RECORD #' + writer.count);
    console.log(record.as('xml'));
});*/


