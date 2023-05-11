import { Logger } from '../common'
import { data_wastesNoPool } from '../repositories/data_wastesNoPool'


export class WastesControllerNP {
    private static instance: WastesControllerNP;
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

    public static getInstance() : WastesControllerNP
    {
        if (!this.instance)
        {
            this.instance = new WastesControllerNP();
        }
        return this.instance;
    }

    public getFilteredWastes(filter: string) : Promise<any> 
    {
        const casodata3 = new data_wastesNoPool();
        return casodata3.getWasteMovementByQuantityNoPool(filter);
    }
}