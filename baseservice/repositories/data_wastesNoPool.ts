import { Logger } from '../common'
const sql = require('mssql');

const sqlConfig = {
    user: "root",
    password: "123456",
    database: "caso3",
    server: "localhost",
    pool: {
    max: 1,
    min: 1,
    idleTimeoutMillis: 30000
    },
    options: {
    encrypt: true, 
    trustServerCertificate: true 
    }
}


export class data_wastesNoPool {
    private log: Logger;

    public constructor()
    {
        this.log = new Logger();
        // via singleton, accediendo a un solo pool tengo una conexiona la base de datos
    }

    public async getWasteMovementByQuantityNoPool(filter: number): Promise<any> {
        const connection = await sql.connect(sqlConfig);
        try {
            const request = new sql.Request(connection);
            request.input('filter', sql.Int, filter);
            const result = await request.execute('GetWasteMovementsByQuantity');
            return result.recordset;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            await connection.close();
        }
    }
}