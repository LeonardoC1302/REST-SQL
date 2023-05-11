import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from '../common';
import {kindnessrouter} from './kindness';
import {articlesrouter} from './articlesrouter';
import { feriarouter } from './feriarouter';
import { casorouter } from './casorouter';
import { casorouter3 } from './casorouter3';
import { wastesrouterpool } from './wastesrouterpool';
import { wastesrouternp } from './wastesrouternp';

class Routes {

    public express: express.Application;
    public logger: Logger;

    constructor() {
        this.express = express();
        this.logger = new Logger();

        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.express.use('/kind', kindnessrouter);
        this.express.use('/articles', articlesrouter);
        this.express.use('/feria', feriarouter);
        this.express.use('/caso', casorouter);
        this.express.use('/caso3', casorouter3);
        this.express.use('/wastespool', wastesrouterpool);
        this.express.use('/wastesnp', wastesrouternp);

        this.logger.info("Kindness route loaded");
        this.logger.info("articles route loaded");
        this.logger.info("feria route loaded");
        this.logger.info("caso route loaded");
        this.logger.info("caso3 route loaded");
        this.logger.info("wastespool route loaded");
        this.logger.info("wastesnp route loaded");
    }
}

export default new Routes().express;

