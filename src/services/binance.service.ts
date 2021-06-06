const Binance = require('node-binance-api');

const BINANCE_API_KEY: string | undefined = process.env.BINANCE_API_KEY
const BINANCE_SECRET_KEY: string | undefined = process.env.BINANCE_SECRET_KEY

const binance = new Binance().options({
  APIKEY: BINANCE_API_KEY,
  APISECRET: BINANCE_SECRET_KEY
});

export const getCoinPrice = async (coin: string | undefined) => {
    if (coin) {
      try {
        const symbol = `${coin}USDT`;
        let tickerPrice = await binance.prices(symbol);
        // console.log(`price of ${symbol}: ${tickerPrice}`);
        return tickerPrice[symbol];
      } catch (error) {
        return false;
      }
        
    }
    return false;
}
