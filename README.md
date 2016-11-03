# A file system Utility


In this exercise you are going to be using async testing to test functionalities useful to delete and create directories, as well as writing and deleting files asynchronously.


## Start
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


## Your Tasks
You should be able to accomplish task 1 & 2 during the day. Only start working on tasks 3 & 4 if you have some extra time left. Don’t try finding solutions online, do it yourself!


1. Following the instructions in rmdir.spec.js add test the rmdir functionality
2. in a new file create the tests for the writeFile functionality and deleteFile
3. Following the TDD methodology write a function that will delete a directory synchronously even if that directory is not empty. this functio should:
    1. Remove all files in a dir and delete the root dir
    2. Delete all dirs in a dir and delete the root dir
    3. Recursively delete all directories and files




## ATTENTION
__whenever you need to create a path use the ``` path.join("folder1", "folder2", ..., "folderN") ``` functionality from the path module {https://nodejs.org/api/path.html}. This should make it safer to delete folders that are only relative to the root path provided!!!!__