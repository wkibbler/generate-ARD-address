// one time code to generate the master key
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

var phrase = "username password"
let seedBuffer = bip39.mnemonicToSeed(phrase)
// <Buffer 85 19 18 81 cf 0e cc f7 9c 5d 61 ......

let masterNode = bitcoin.HDNode.fromSeedBuffer(seedBuffer)
// Deriving the first account based on BIP44
let account0 = masterNode.derivePath("m/44'/0'/0'")
let xpubString = account0.neutered().toBase58()
let key0 = account0.derivePath("0/0").keyPair
let key0FromXpub = account0.neutered().derivePath("0/0").keyPair
let address0 = key0.getAddress()
let address0FromXpub = key0FromXpub.getAddress()
console.log(address0);
console.log(key0.toWIF())
