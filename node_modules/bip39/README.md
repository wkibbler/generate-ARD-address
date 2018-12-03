# BIP39

[![Build Status](https://travis-ci.org/bitcoinjs/bip39.png?branch=master)](https://travis-ci.org/bitcoinjs/bip39)
[![NPM](https://img.shields.io/npm/v/bip39.svg)](https://www.npmjs.org/package/bip39)

JavaScript implementation of [Bitcoin BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys

# ARD wallet
This is a striped down version of the original js bip39 by bitcoinjs which can be found at https://github.com/bitcoinjs/bip39 . It does not contain the function to create mnemonics from a word list or have testnet support. I would suggest against using this for your application and instead use the original version by using the repo above.

## Examples
```js
//convert input mnemonic to seed
var phrase = "input data";
bip39.mnemonicToSeed(phrase)
```
