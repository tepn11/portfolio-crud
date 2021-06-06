import express, { Request, Response } from 'express'
import * as coinsService from './services/coin.service'
import * as priceService from './services/binance.service'

const router = express.Router();

router.get('/coins', async (req: Request, res: Response) => {
    const response = await coinsService.findAll();
    // console.log(response);
    res.send(response);
})

router.post('/coin/', async (req: Request, res: Response) => {
    const body = req.body;
    const response = await coinsService.create(body);
    console.log('response in route', response);
    if (response) {
        return res.send({ success: true, msg: 'New coin added'});
    } else {
        return res.send({ success: false, msg: 'Error adding coin'});
    }
    
})

router.get('/coin/findBySymbol', async (req: Request, res: Response) => {
    const value = String(req.query?.value);
    if (!value) {
        return res.send({ msg: 'No documents found in search'});
    } else {
        const response = await coinsService.findBySymbol(value);
        console.log('response', response);
        if (!response || response === null) {
            return res.send({ msg: 'No documents found in search'});
        }
        res.send(response);
    }
})

router.get('/coin/findByName', async (req: Request, res: Response) => {
    const value = String(req.query?.value);
    if (!value) {
        res.send({ msg: 'No documents found'});
    }
    const response = await coinsService.findByName(value);
    console.log('response', response);
    if (!response || response === null) {
        return res.send({ msg: 'No documents found in search'});
    }
    res.send(response);
})

router.get('/coin/:id', async (req: Request, res: Response) => {
    const id = req.params?.id
    if (!id) {
        return res.end(500)
    }
    const response = await coinsService.find(id);
    // console.log(response);
    if (!response || response === null) {
        return res.send({ msg: 'No document found'});
    }
    res.send(response);
})

router.put('/coin/:id', async (req: Request, res: Response) => {
    const id = req.params?.id
    const body = req.body;
    if (!id) {
        return res.end(500)
    }
    const response = await coinsService.update(id, body);
    // console.log(response);
    if (!response || response === null) {
        return res.send({ msg: 'Could not update coin'});
    }
    res.send({ success: true, msg: 'Coin updated'});
})

router.delete('/coin/:id', async (req: Request, res: Response) => {
    const id = req.params?.id
    if (!id) {
        return res.end(500)
    }
    const response = await coinsService.remove(id);
    // console.log(response);
    if (!response || response === null) {
        return res.send({ msg: 'No document found'});
    }
    res.send({ success: true, msg: 'Coin successfully deleted'});
})

router.get('/coinPrice', async (req: Request, res: Response) => {
    const coin: string | undefined = String(req.query?.coin);
    const response = await priceService.getCoinPrice(coin);
    console.log(response);
    res.send(response);
})

export { router as Router }