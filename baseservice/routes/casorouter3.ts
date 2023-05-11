import * as express from 'express';
import { Logger } from '../common'
import { CasoController3 } from '../controllers/'

const app = express();
const log = new Logger();

app.post("/getfilteredproducers", (req, res,next) => {
    CasoController3.getInstance().getFilteredProducers(req.body.filter)
    .then((data:any)=>{
        res.json(data);
    })
    .catch((err:any)=>{
        log.error(err);
        return "{msg: \"error\"}";
    });

});

export { app as casorouter3 };