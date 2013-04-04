(function(exports){

  /**
   * Encrypts a file.
   *
   * @param {Blob} file The file to encrypt.
   * @param {string} password The password to encrypt the file with.
   *
   * @return {File} The encrypted file
   */
  exports.encrypt = function(file, password) {
    throw "Not yet implemented";
  };

  /**
   * Decrypts a file.
   *
   * @param {Blob} file The file to decrypt.
   * @param {string} password The password to decrypt the file with.
   *
   * @return {File} The decrypted file
   */
  exports.decrypt = function(file, password) {
    throw "Not yet implemented";
  };

})(typeof exports === 'undefined'? this['aescrypt']={}: exports);