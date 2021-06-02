import express, { Request, Response } from 'express'
import * as coinsService from './services/coin.service'

const router = express.Router();

router.get('/coins', async (req: Request, res: Response) => {
    const response = await coinsService.findAll();
    console.log(response);
    res.send(response);
})

router.post('/coin/', async (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);
    const response = await coinsService.create(body);
    res.send('New coin created');
})

router.get('/coin/:id', async (req: Request, res: Response) => {
    const id = req.params?.id
    if (!id) {
        return res.end(500)
    }
    const response = await coinsService.find(id);
    console.log(response);
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
    console.log(response);
    if (!response || response === null) {
        return res.send({ msg: 'Could not update coin'});
    }
    res.send({ msg: 'Coin updated'});
})

router.delete('/coin/:id', async (req: Request, res: Response) => {
    const id = req.params?.id
    if (!id) {
        return res.end(500)
    }
    const response = await coinsService.remove(id);
    console.log(response);
    if (!response || response === null) {
        return res.send({ msg: 'No document found'});
    }
    res.send({ msg: 'Coin successfully deleted'});
})

export { router as Router }