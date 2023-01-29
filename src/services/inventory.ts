// eslint-disable-next-line no-console

import { TransactionType } from "../constants/transaction";
import { findStock } from "../utils/stocks";
import { findTransaction } from "../utils/transaction";

export async function calculateCurrentStockLevels(sku: string): Promise <{sku: string, qty: number}> {

    const promises = await Promise.all([findStock(sku),findTransaction(sku) ]);

    const stocks = promises[0];
    const transactions = promises[1];
    if(stocks.length === 0 && transactions.length === 0) {
        throw new Error('sku does not exist');
    }
    if(stocks.length === 0) {
        return {sku, qty : 0}
    }
    let totalStock = 0
    stocks.forEach(a=> {
        totalStock = totalStock + a.stock;
    })
    transactions.forEach(a=> {
        if(a.type === TransactionType.ORDER) {
            totalStock = totalStock - a.qty;
        }
        if(a.type === TransactionType.REFUND) {
            totalStock = totalStock + a.qty;
        }
    })

    return {sku, qty: totalStock}
}