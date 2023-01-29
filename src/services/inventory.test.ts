import { findStock } from '../utils/stocks';
import {calculateCurrentStockLevels} from './inventory';

const testSku = 'LTV719449/39/39';
const invalidStock = 'asdf';
const testskuNotInStock = 'HGG795032/35/91'
describe('calculateCurrentStockLevels', () => {
  let qty: number;
  let data: {sku: string, qty:number};

  beforeAll(async () => {
    const stock = await findStock(testSku);
    qty = stock[0]?.stock || 0;
    data = await calculateCurrentStockLevels(testSku);
})


  test('It should calculate current stock level for sku', async() => {
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("sku");
    expect(data).toHaveProperty("qty");
  });

  test('It should decrement stock level  when transaction type is order', async() => {
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("sku");
    expect(data).toHaveProperty("qty");
    expect(data.qty).toBeLessThan(qty);
  });

  test('It should increment stock level  when transaction type is refund', async() => {
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("sku");
    expect(data).toHaveProperty("qty");
    expect(data.qty).toEqual(8510);
  });

  test('It should return 0 qty when stock is not there', async() => {
    data = await calculateCurrentStockLevels(testskuNotInStock);
    expect(data).toBeInstanceOf(Object);
    expect(data).toHaveProperty("sku");
    expect(data).toHaveProperty("qty");
    expect(data.qty).toBe(0);
  });
});

describe('invalid stock test', () => {
  test('It should fail for current stock level for sku', async() => {

    await expect(calculateCurrentStockLevels(invalidStock))
    .rejects
    .toThrow();
    })
});