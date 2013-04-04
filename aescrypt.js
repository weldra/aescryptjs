(function(exports){
  'use strict';

  /**
   * Encrypts a file.
   *
   * @param {Blob} file The file to encrypt.
   * @param {string} password The password to encrypt the file with.
   * @param {function} callback Function to call when encryption is finished.
   */
  exports.encrypt = function(file, password, callback) {
    throw "Not yet implemented";
  };

  /**
   * Decrypts a file.
   *
   * @param {Blob} file The file to decrypt.
   * @param {string} password The password to decrypt the file with.
   * @param {function} callback Function to call when decryption is finished.
   */
  exports.decrypt = function(file, password, callback) {
    throw "Not yet implemented";
  };

})(typeof exports === 'undefined'? this['aescrypt']={}: exports);