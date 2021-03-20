require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom kiwi bridge tooth guard render remember pupil idea globe frame slide'; 
let testAccounts = [
"0xeb977cd387ff4f5f49773bffdd7602a3dd81e0104a2e2481a0ae07035bb279d8",
"0x499471514245a05bca3b725b09ba2fc57380057d1bda7f7c126004745a6c51ae",
"0x9773329794d8b025008fd6e25766d9199bea06cd53e72c5e785a2a00af8ad61a",
"0x02384e2c1b1b697a2908375f9aa3a8e75c911ca3439a829283d6591dd4008368",
"0x67f5e709e46825a7e0ac9a4ada977cd06514ecc047210257115b627945f67516",
"0x6dd2a073ccc46672e6ce023b3de473d5c5aeadb11a6111c45bf63d275a45ec9b",
"0x749932defb188faa7f5b972b09911dfa9a5683baf76e30f7120793950c4282ba",
"0x2c91e114a1d771f06f8d36c959953ade8f5c40dc155b19d641a315e4c237057d",
"0x92dedf795ba161f84d05851f236bd8148f23aa7d3cd951bb2ff359a599bd7d83",
"0xdda92c6cca7fc5f1235e0b272f7d5cdce5212ed954802645e7483bc6e59e7b6d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

