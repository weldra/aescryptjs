AESCryptJS
========
Javascript library to read and write [AESCrypt](http://aescrypt.com/) files.

## Installation

### NPM

**Note: not yet registered!**

    npm install -g aescrypt

### Bower

**Note: not yet registered!**

    bower install aescryptjs

## Usage

To encrypt an AESCrypt file

    var aescrypt = require('aescrypt');

    var file = 'myfile.txt',
        pass = 'MyPassPhrase';

    aescrypt.encrypt(file, pass, function() {

    });

To decrypt an AESCrypt file

    var file = 'myfile.txt.aes',
        pass = 'MyPassPhrase';

    aescrypt.decrypt(file, pass, function() {

    });
