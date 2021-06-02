import mongoose from 'mongoose';
import { ICoin, CoinModel } from '../models/coin'

export const findAll = async (): Promise<ICoin[]> => {
    const response = await CoinModel.find({}).exec();
    return response;
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
    const response = await CoinModel.create(newCoin);
    // console.log(response);
    return response;
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
    // console.log('response', response);
    return response;
};

export const findByName = async (value: string): Promise<ICoin[] | null> => {
    const regExp = new RegExp(value, 'i');
    const response = await CoinModel.find({ name: { $regex: regExp } }).exec();
    // console.log('response', response);
    return response;
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
