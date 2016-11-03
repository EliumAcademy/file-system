var fs = require('fs');
var path = require('path');

// find if the a file or directory exist at location, if it does not, it recursivelly goes backwars in the filepath
function getExists(filepath) {
    var exists = fs.existsSync(filepath);
    if (exists) {
        return filepath;
    } else {
        return getExists(path.dirname(filepath));
    }
}

// recursively create directories
/**
 * @description 
 * Create dirs recursively and asyncronously
 * 
 * @param { Array    } dirNames
 * @param { String   } root
 * @param { Function } callback
 */
function createDir (dirsNames, root, callback) {
    if (!dirsNames[0]) {
        return callback()
    }
    filepath = path.join(root, dirsNames[0]);
    fs.mkdir(filepath, function(err) {
        createDir(dirsNames.slice(1, dirsNames.length), filepath, callback);
    });
}

/**
 * @description 
 * Implements deleteDir
 * 
 * @param  {String}   filepath
 * @param  {Function} callbakc
 */
const mkdir = function(filepath, callback) {
    var root = getExists(filepath);
    var children = path.relative(root, filepath);

    if (!children) return callback();

    children = children.split(path.sep);
    createDir(children, root, callback);
};

/**
 * @description 
 * Remove dirs recursively and asyncronously
 * 
 * @param { Array    } dirNames
 * @param { Function } callback
 * @param { String   } root
 */
function removeDir(dirsNames, callback, root = ".") {
    if (!dirsNames[0]) {
        return callback()
    }

    filepath = path.join(root, ...dirsNames);
    fs.rmdir(filepath, function(err) {
        removeDir(dirsNames.slice(0, dirsNames.length - 1), callback, root);
    });
}

/**
 * @description 
 * Implements removeDir
 * 
 * @param  {String}   filepath
 * @param  {Function} callback
 * @param  {String}   root
 */
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
 *   fs.writeFile('path/filename.txt', 'something', function(){if err console.log(err)})
 *   fs.writeFile('path/filename.txt', 'something', function(){if err console.log(err)})
 * ```
 */

const writeFile = function(filename, data, callback) {
    var dirname = path.dirname(filename);
    // Create dir first
    mkdir(dirname, function() {
        fs.writeFile(filename, data, options, callback);
    });
};

/**
 * @description 
 * Delete File
 * 
 * @example
 * ```js
 *   fs.deleteFile('path/filename.txt', function(){if err console.log(err)})
 *   fs.deleteFile('path/filename.txt', function(){if err console.log(err)})
 * ```
 */


const deleteFile = function(filename, callback) {
    fs.unlink(filename, callback);
};




module.exports = {
    mkdir,
    rmdir,
    writeFile,
    deleteFile
}