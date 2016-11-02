var file = require('../index');
var fs = require('file-system');
var path = require('path');

//var jasmine = require('jasmine')
function getPath(filepath) {
  return path.join(__dirname, filepath);
}

// test dir
var testPath = getPath(path.join('rmdir'))


// rm working dir if it existed
if(fs.existsSync(testPath)){ fs.rmdirSync(testPath) }

// create working dir if it did not exists
fs.mkdirSync(testPath);

describe('mkdir', function() {
  it('one level Directory', function(done) {
    var folderName = "a" 
    var itPath = path.join(testPath, folderName)
    // create dir to be deleted
    fs.mkdirSync(itPath);

    file.rmdir(folderName, function(err) {
      if (err) throw err;
      var exists = fs.existsSync(itPath);
      expect(exists).toEqual(false);
      done();
    }, testPath);
  });

  it('multiple level Directory', function(done) {
    var folderName = path.join('1','2','3','4')
    var itPath = path.join(testPath, folderName)
    // create dir to be deleted
    fs.mkdirSync(itPath)

    file.rmdir(folderName, function(err) {
      if (err) throw err;
      var exists = fs.existsSync(itPath);
      expect(exists).toEqual(false);
      done();
    }, testPath);
  });

  it('delete half way', function(done) {
    var topNames = path.join('31','41') 
    var bottomNames = path.join('11','21') 
    var itPath = path.join(testPath, bottomNames, topNames)

    fs.mkdirSync(itPath)
    file.rmdir(topNames , function(err) {
      if (err) throw err;
      var exists = fs.existsSync(path.join(testPath, bottomNames));
      expect(exists).toEqual(true);
      done();
    }, path.join(testPath, bottomNames));
  });


  it('callback', function(done) {
    var folderName = "callback" 
    var itPath = path.join(testPath, folderName)

    fs.mkdirSync(itPath)
    var a;

    fs.rmdir(itPath, function(err) {
      a = 1;
      expect(a).toEqual(1);
      done();
    }, testPath);
  });

});