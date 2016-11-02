# A file system Utility

In this execise you are going to be using async testing to test functionalities usefull to delete and create directories, as well as writing and deleting files asyncronously.

### Start
The functionalities of the efs module are:

### .mkdir(filepath, callback)
If the filepath is not absolute, the relative filepath will be used by node starting from the directory the script is being executed from. A callback must be given; even if empty.
* {string} ``filepath`` required
* {function} ``callback`` required


### .rmdir(filepath, callback, root = ".")
the filepath must be relative to the root dir, if not specified the root will default to the directory the script is called from.
* {string} ``filepath`` required
* {function} ``callback`` required
* {root} ``root`` required

### .writeFile(filename, data, callback)
The file name can be relative or absolute, text is the text to be written inside the file.
* {string} ``filepath`` required
* {string} ``data`` required
* {callback} ``callback`` required


### .deleteFile(filename, callback)
Behaves like deleteFile
* {string} ``filepath`` required
* {callback} ``callback`` required

## ATTENTION
__whenever you need to create a path use the ``` path.join("folder1", "folder2", ..., "folderN") ``` functionality from the path module {https://nodejs.org/api/path.html}. This should make it safer to delete folders that are only relative to the root path provided!!!!__

