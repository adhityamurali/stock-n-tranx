import express, { Request, Response } from 'express';
import { calculateCurrentStockLevels } from '../services/inventory';

//GET ROUTE
export function getInventoryRouter() {
    return express
      .Router({ mergeParams: true })
      .get('/',getInventory)
  }

async function getInventory(req: Request, res: Response){
    const sku = req.query.sku as string;
    if(!sku) {
        res.json({success: false, error: "sku required"})
    }
    try {
        const resp = await calculateCurrentStockLevels(sku);
        res.json({success: true, data: resp});

    }catch(e:any) {
        res.json({success: false, error: e.message})
    }
}
