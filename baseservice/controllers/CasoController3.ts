import { Logger } from '../common'
import { data_caso3 } from '../repositories/data_caso3'


export class CasoController3 {
    private static instance: CasoController3;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : CasoController3
    {
        if (!this.instance)
        {
            this.instance = new CasoController3();
        }
        return this.instance;
    }

    public getFilteredProducers(filter: string) : Promise<any> 
    {
        const casodata3 = new data_caso3();
        return casodata3.getProducersByFilter(filter);
    }
}