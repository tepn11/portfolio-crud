import { model, Schema, Model, Document } from 'mongoose';

interface ICoin extends Document {
    symbol: string;
    name: string;
    boughtAmount: number;
    boughtPrice: number;
    currentPrice?: number;
    notes?: string;
    // boughtDate?: string;
}
  
const CoinSchema: Schema = new Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    boughtAmount: { type: Number, required: true },
    boughtPrice: { type: Number, required: true },
    notes: { type: String, required: false },
    // boughtDate: { type: Date, required: false, default: new Date() },
});
  
const CoinModel: Model<ICoin> = model('Coin', CoinSchema);

export { ICoin, CoinModel }