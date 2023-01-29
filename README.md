### Dev Setup
#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

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


