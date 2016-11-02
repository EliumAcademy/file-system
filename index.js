/**
 * @fileoverview Strengthen the ability of file system
 * @author wliao <wliao@Ctrip.com> 
 */
var fs = require('fs');
var path = require('path');


function getExists(filepath) {
    var exists = fs.existsSync(filepath);
    if (exists) {
        return filepath;
    } else {
        return getExists(path.dirname(filepath));
    }
}


function createDir(dirsNames, root, callback) {
    if (!dirsNames[0]) {
        return callback()
    }
    filepath = path.join(root, dirsNames[0]);
    fs.mkdir(filepath, function(err) {
        createDir(dirsNames.slice(1, dirsNames.length), filepath, callback);
    });
}

const mkdir = function(filepath, callback) {
    var root = getExists(filepath);
    var children = path.relative(root, filepath);

    if (!children) return callback();

    children = children.split(path.sep);
    createDir(children, root, callback);
};


function removeDir(dirsNames, callback, root = ".") {
    if (!dirsNames[0]) {
        return callback()
    }

    filepath = path.join(root, ...dirsNames);
    fs.rmdir(filepath, function(err) {
        removeDir(dirsNames.slice(0, dirsNames.length - 1), callback, root);
    });
}

const rmdir = function(filepath, callback, root = ".") {
    var top = getExists(path.join(root, filepath));
    var children = path.relative(root, top);


    if (!children) return callback();
    children = children.split(path.sep);
    removeDir(children, callback, root);
};



/**
 * @description 
 * Create file, if path don't exists, it will not throw error.
 * And will mkdir for path, it is asynchronous
 * 
 * @example
 * ```js
 *   fs.writeFile('path/filename.txt', 'something')
 *   fs.writeFile('path/filename.txt', 'something', {})
 * ```
 */
 //

const writeFile = function(filename, data, callback) {
    var dirname = path.dirname(filename);
    // Create dir first
    mkdir(dirname, function() {
        fs.writeFile(filename, data, options, callback);
    });
};


const deleteFile = function(filename, callback) {
    fs.unlink(filename, callback);
};


/**
 * @description
 * Remove folder and files in folder, but it's synchronous
 * @example
 * file.rmdirSync('path');
 */


module.exports = {
    mkdir,
    rmdir,
    writeFile,
    deleteFile
}