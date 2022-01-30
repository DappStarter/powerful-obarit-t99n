require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember unable gesture nation fringe gaze'; 
let testAccounts = [
"0x2846e1fe9f8b267c05033afd2c2ec384aa034532ed71111ac61613259c3f0b38",
"0x78048d0a049b25b7c50971f67f07ab407b2b53c7b1213b1eaa4361c73ddad323",
"0xfb1c30d20784a80c4e9c1f46d31710f8d35c90aa1dd23ec552ec4feea4ee74b3",
"0xdce967b6e75827ebcc04d7ead20156459b4c6ee50a0449fc5090c166432ba13e",
"0x23058cb237cce0bd57e8c401cc6c5385c5e78d022a6df49ce07fca01abc1bcdd",
"0xa4dda63932028dcf5af4105bbd8a5f2e4ffd34750491d8ad645824aeba8f0ce7",
"0x9050eae9ab03383b5cf0e1c6b8da2217b700fc842afb1a7c04eec05b035a303a",
"0xc5e511a589d1cbc1901f05c358845ec829757999fef9bdf4b7f1062a8a43d479",
"0xd5beefc5f723920e1c3e565d9a95ee3b9dcb7059e1f37eb5875a580a26808642",
"0xc507831167c94ddee1da57e6da90cb0273224ae1371d34be79599a55a158ca91"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

