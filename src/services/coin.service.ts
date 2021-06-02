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
    console.log(response);
    return response;
};

export const update = async (id: string, newCoinData: ICoin): Promise<ICoin | null> => {
    const idValid = mongoose.Types.ObjectId.isValid(id);
    if (idValid) {
        const response = await CoinModel.findByIdAndUpdate(id, newCoinData);
        console.log(response);
        return response;
    } else {
        return null
    }
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

// export const update = async (
//   id: number,
//   itemUpdate: BaseItem
// ): Promise<Item | null> => {
//   const item = await find(id);

//   if (!item) {
//     return null;
//   }

//   items[id] = { id, ...itemUpdate };

//   return items[id];
// };
