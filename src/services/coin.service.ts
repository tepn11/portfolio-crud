import mongoose from 'mongoose';
import { ICoin, CoinModel } from '../models/coin'
import * as priceService from './binance.service'

export const findAll = async (): Promise<ICoin[] | null> => {
    const response = await CoinModel.find({}).exec();
    const getPricesPromiseArray: Promise<string>[] = [];
    response.forEach(coin => {
        getPricesPromiseArray.push(priceService.getCoinPrice(coin.symbol))
    });
    const newValue = await Promise.all(getPricesPromiseArray)
    .then(res => {
        const newList = res.map((price, i) => {
            return {
                _id: response[i]._id,
                symbol: response[i].symbol,
                name: response[i].name,
                boughtPrice: response[i].boughtPrice,
                boughtAmount: response[i].boughtAmount,
                currentPrice: Number(price)
            };
        });
        return newList;
    }).catch(err => {
        console.error(err);
        return null
    })
    return newValue as ICoin[];
    
};

export const find = async (id: string): Promise<ICoin | null> => {
    const idValid = mongoose.Types.ObjectId.isValid(id);
    if (idValid) {
        const response = await CoinModel.findById(id).exec();
        return response;
    } else {
        return null
    }
};

export const create = async (newCoin: ICoin): Promise<ICoin | null> => {
    try {
        const coinValid = await priceService.getCoinPrice(newCoin.symbol);
        if (coinValid) {
            const response = await CoinModel.create(newCoin);
            // console.log(response);
            return response;
        }
        return null;
    } catch (error) {
        return null;
    }
    
};

export const update = async (id: string, newCoinData: ICoin): Promise<ICoin | null> => {
    const idValid = mongoose.Types.ObjectId.isValid(id);
    if (idValid) {
        const response = await CoinModel.findByIdAndUpdate(id, newCoinData);
        // console.log(response);
        return response;
    } else {
        return null
    }
};

export const findBySymbol = async (value: string): Promise<ICoin[] | null> => {
    const regExp = new RegExp(value, 'i');
    const response = await CoinModel.find({ symbol: { $regex: regExp } }).exec();
    const getPricesPromiseArray: Promise<string>[] = [];
    response.forEach(coin => {
        getPricesPromiseArray.push(priceService.getCoinPrice(coin.symbol))
    });
    const newValue = await Promise.all(getPricesPromiseArray)
    .then(res => {
        const newList = res.map((price, i) => {
            return {
                _id: response[i]._id,
                symbol: response[i].symbol,
                name: response[i].name,
                boughtPrice: response[i].boughtPrice,
                boughtAmount: response[i].boughtAmount,
                currentPrice: Number(price)
            };
        });
        return newList;
    }).catch(err => {
        console.error(err);
        return null
    })
    return newValue as ICoin[];
};

export const findByName = async (value: string): Promise<ICoin[] | null> => {
    const regExp = new RegExp(value, 'i');
    const response = await CoinModel.find({ name: { $regex: regExp } }).exec();
    const getPricesPromiseArray: Promise<string>[] = [];
    response.forEach(coin => {
        getPricesPromiseArray.push(priceService.getCoinPrice(coin.symbol))
    });
    const newValue = await Promise.all(getPricesPromiseArray)
    .then(res => {
        const newList = res.map((price, i) => {
            return {
                _id: response[i]._id,
                symbol: response[i].symbol,
                name: response[i].name,
                boughtPrice: response[i].boughtPrice,
                boughtAmount: response[i].boughtAmount,
                currentPrice: Number(price)
            };
        });
        return newList;
    }).catch(err => {
        console.error(err);
        return null
    })
    return newValue as ICoin[];
};

export const remove = async (id: string): Promise<ICoin | null> => {
    const idValid = mongoose.Types.ObjectId.isValid(id);
    if (idValid) {
        const response = await CoinModel.findByIdAndDelete(id).exec();
        return response;
    } else {
        return null
    }
};
