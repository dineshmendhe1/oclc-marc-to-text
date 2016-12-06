'use strict';
var marc = require('../lib/marcjs'),
    fs   = require('fs');

// Converts the provided marc file into xml with iso2709 defined standard of library of congress. 
var reader = new marc.getReader(fs.createReadStream('../marc_files/20110513.marc'), 'iso2709');
var writer = new marc.MarcxmlWriter(fs.createWriteStream('bib-xmloutput.xml'));
marc.getWriter(process.stdout, 'iso2709');
reader.pipe(writer);

//var reader = new marc.MarcxmlReader(fs.createReadStream('test/data/bib.xml'));
//var writer = new marc.JsonWriter(fs.createWriteStream('test/data/bib-out.xml'));
//var writer = new marc.MiJWriter(fs.createWriteStream('test/data/bib-out.mij'));
