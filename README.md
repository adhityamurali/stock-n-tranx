### Dev Setup
#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run prettier-format`

Format your code.

### API

#### Inventory

##### GET 

sku - stock name(sku)

Request - http://localhost:5050/api/inventory?sku={sku}

Response - 200

```
    {
    "success": true,
    "data": {
        "sku": "CLQ274846/07/46",
        "qty": 8369
        }
    }
```


