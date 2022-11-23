//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var func = async () => {
    let data = await CoinGeckoClient.ping();
    console.log(data);
};


async function getAllData(per_page = 50, page = 1, sparkline = false) {
    let res = await CoinGeckoClient.coins.all({ per_page: per_page, page: page, sparkline: sparkline });
    console.log(Object.entries(res.data));
    return res.data;
}


