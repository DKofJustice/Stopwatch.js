#!/usr/bin/env node

var jsonstream = require('JSONStream');
var request = require('hyperquest');
var through = require('through2');
var manifestUrl = process.argv[2];
var fs = require('fs');
var configFile = __dirname + '/.config';
var prompt = require('prompt');
prompt.start();

if (manifestUrl) {
  start();
} else {
  if (fs.existsSync(configFile)) {
    manifestUrl = fs.readFileSync(configFile, 'utf-8');
    start();
  } else {
    init();
  }
}

function init() {
  prompt.get(['manifestUrl'], done);
  function done(err, result) {
    if (err || !result) return console.error('url not provided');
    manifestUrl = result.manifestUrl;
    start();
  }
}

function start() {
  request(manifestUrl)
    .pipe(jsonstream.parse('files.*'))
    .pipe(through.obj(create))
    .on('finish', complete)
  ;
}

function create(data, enc, cb) {
  var file = Object.keys(data)[0];
  var url = data[file];
  console.log('creating file %s', file);
  request(url)
    .pipe(fs.createWriteStream(file));
  cb();
}

function complete() {
  if (!process.argv[2]) {
    fs.writeFileSync(configFile, manifestUrl);
  }
}
