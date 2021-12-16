import { getTransactionsHistory } from './harmonyv2';
import { contracts } from "./contracts";
const {
    fromBech32
} = require('@harmony-js/crypto')
const {
    ChainID,
    ChainType,
  } = require('@harmony-js/utils');

const contractAddresses = Object.values(contracts);
const defaultOptions = {
    rpc: 'https://api.harmony.one',
    chainId: ChainType.Harmony,
    chainType: ChainID.HmyMainnet
};

export async function getTransactions(player, filters) {
    let transactions = await getTransactionsHistory(defaultOptions.rpc, player, {
        pageSize: filters?.limit
    });
    // if start/end filters were passed in, ensure transactions get filtered in between
    const filtersStartValue = filters?.start?.valueOf();
    const filtersEndValue = filters?.end?.valueOf();
    if (filtersStartValue || filtersEndValue) {
        transactions = transactions.filter(transaction => {
            const date = new Date(transaction.timestamp);
            const dateValue = date.valueOf();
            if (filtersStartValue && dateValue < filtersStartValue)
                return false;
            if (filtersEndValue && dateValue > filtersEndValue)
                return false;
            return true;
        });
    }
    const filtersContract = filters?.contract;
    if (filtersContract) {
        transactions = transactions.filter(transaction => {
            const checksumTo = fromBech32(transaction.to);
            const checksumFrom = fromBech32(transaction.from);
            // if the provided contract address is not one of the DFK contracts, exclude this transaction
            if (!contractAddresses.includes(filtersContract))
                return false;
            // if the sender AND receiver don't equal the provided contract address, exclude this transaction
            if (checksumTo !== filtersContract && checksumFrom !== filtersContract)
                return false;
            return true;
        });
    }
    else {
        // if the contract filter is not applied, then we still need to filter out all non-DFK transactions
        transactions = transactions.filter(transaction => {
            const checksumTo = fromBech32(transaction.to);
            const checksumFrom = fromBech32(transaction.from);
            // if the sender AND receiver is not one of the DFK contracts, exclude this transaction
            if (!contractAddresses.includes(checksumTo) && !contractAddresses.includes(checksumFrom))
                return false;
            return true;
        });
    }
    return transactions;

}
