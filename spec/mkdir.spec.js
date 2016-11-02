var file = require('../index');
var fs = require('file-system');
var path = require('path');

function getPath(filepath) {
  return path.join(__dirname, filepath);
}

//test dir
var testPath = getPath(path.join('mkdir'))

// rm working dir if it existed
if(fs.existsSync(testPath)){ fs.rmdirSync(testPath) }


describe('mkdir', function() {
  it('one level Directory', function(done) {
    file.mkdir(testPath, function(err) {
      if (err) throw err;
      var exists = fs.existsSync(testPath);
      expect(exists).toEqual(true);
      done();
    });
  });

  it('multiple level Directory', function(done) {
    var itPath = path.join(testPath, '1','2','3','4')
    file.mkdir(itPath, function(err) {
      if (err) throw err;
      var exists = fs.existsSync(itPath);
      expect(exists).toEqual(true);
      done();
    });
  });

  it('callback', function(done) {
    var itPath = path.join(testPath, 'callback')
    var a;
    fs.mkdir(itPath, function(err) {
      a = 1;
      expect(a).toEqual(1);
      done();
    });
  });

});