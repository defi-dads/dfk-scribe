const {
    fromBech32
} = require('@harmony-js/crypto')
const {
    isBech32Address
} = require('@harmony-js/utils');
import axios from 'axios';

export async function getTransactionsHistory(rpc, address, filters) {
    const checksumAddress = isBech32Address(address) ? fromBech32(address) : address;
    const data = {
        jsonrpc: '2.0',
        id: '1',
        method: 'hmyv2_getTransactionsHistory',
        params: [{
                address: checksumAddress,
                pageIndex: filters?.page || 0,
                pageSize: filters?.pageSize || 100000,
                fullTx: true,
                txType: filters?.type || 'ALL',
                order: filters?.order
            }]
    };
    const response = await axios.post(rpc, data);
    if (response.status === 200 && response.data) {
        const data = response.data;
        return data.result.transactions;
    }
    else
        throw new Error();
}