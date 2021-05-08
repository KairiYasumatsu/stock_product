const express = require('express');
const { logger } = require('../logger');
const router = express.Router();

router.use(express.json());

router.get('/test/:symbol', (req, res)=>{
    res.json({
        "symbol": "APPL",
        "url": "https://storage.googleapis.com/iex/api/logos/AAPL.png",
        "company_name": "Apple Inc.",
        "close": 28.81,
        "diff": 3.23,
        "high": 29.12,
        "low": 27.68,
        "volume": 33820759,
        "week52high": 34.68,
        "week52low": 17.50,
        "day200MovingAvg": 140.60541,
        "day50MovingAvg": 156.49678,
        "avg10Volume": 2774000,
        "avg30Volume": 12774000,
        "enterpriseValue": 1022460690000,
        "priceToSales": 3.49,
        "enterpriseValueToRevenue": 3.85,
        "EBITDA": 80342000000
    }
    );
})

module.exports = router;