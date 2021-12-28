
// Accounts Receivable: Rec
// Accounts Payable: Pay
export enum TransactionType {
    Rec_Quest = 'Receivable: Quest Income',
    Pay_GasFee  = 'Payable: Gas Fee',
    Pay_Payment  = 'Payable: Simple Payment',
    Rec_Payment  = 'Receivable: Simple Payment',
    Pay_Hire  = 'Payable: Hire Hero Fee',
    Rec_Hire  = 'Receivable: Hire Hero Fee',
    Pay_Token  = 'Payable: Token',
    Rec_Token  = 'Receivable: Token',
    Pay_NFT  = 'Payable: Hero',
    Rec_NFT  = 'Receivable: Hero',
} 

export enum AccountingType {
    Receivable,
    Payable
}

export interface Token {
    contract: string
    name: string,
}
export interface NFT {
    contract: string
    id: number   
}

export interface TokenTransfer {
    token: Token
    type: AccountingType
    amount: number
}

export interface Transaction {
    tokens_paid: Array<TokenTransfer>
    tokens_received: Array<TokenTransfer>
    nfts_received: Array<NFT>
    nfts_paid: Array<NFT>
    date: Date
    currency_amount: number
}

export interface Columns_Transaction {
    date: Date
    type: TransactionType
    from_address: string
    to_address: string
    evm_native_amount: number
    token_amounts: Array<TokenTransfer>
    nfts: Array<NFT>
}
// The value of LOW Liquidity Tokens cannot be quantified on Receive, because of the lack of liquidity.
// Therefore, LOW Liquidity Token Sales (See EGG Transactions) will be treated as income, not capital gain or loss.

export interface Books {
    capital_gains: number
    capital_losses: number
    capital_net: number
    income: number
}
// NOTE: Calculate for Un-Realized Losses
// NOTE: Calculations for Tax Purposes involve STRATEGIES!!
//  - LIFO "Last-In, First-Out"
//  - FIFO "First-In, First-Out"

// Transactions:

//  Purchase: 500 JEWEL @ $14               | +$7000 (500J)
//  now $13 jewel (-500 Un-Realized Loss)        | $6500 (500J)
//  Purchase: Hero for 150J @ $13           | (-$1950) (350J)
//  Capitol Loss: 150J*(14 - 13)            | (-$150 ) 
//  - 150J bought @ $14, sole @ $13 - -$150 Capital Loss
//  Current Balance:                        | $4550 (350J)
//  Quest Income: EGG                       | $4550 (350J)
//  350J -$15 jewel ($350 Un-Realized Gain) | $5250 (350J)
//  SELL Egg: (+200J @ $15/J)               | $5250
//  Current Balance:  5250 + 3000           | $8250 (550J)
//  SELL 250J JEWEL @ $15:                  | 
//  - 50J bought @ $14, sold @ $15 - $50 Capital Gain
//  - 200J bought @ $15, sold @ $15 - NET 0

// TAXABLE EARNINGS REPORT:
//  - 150J bought @ $14, sole @ $13 - -$150 Capital Loss
//  - 50J bought @ $14, sold @ $15 - $50 Capital Gain
//  - 200J bought @ $15, sold @ $15 - NET 0
//  - 300J bought @ $14, not sold: $300 Unrealized Gain 

//  ALL TOLD: 
//   - $100 Capital Loss
//   - $300 Un-Realized Gain

// Report Generator Service
export enum TaxableType { income, capital_gain, capital_loss }

