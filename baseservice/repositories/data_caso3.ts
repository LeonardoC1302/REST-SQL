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


export class data_caso3 {
    private log: Logger;

    public constructor()
    {
        this.log = new Logger();
        // via singleton, accediendo a un solo pool tengo una conexiona la base de datos
    }

    public async getProducersByFilter(filter: string): Promise<any> {
        const connection = new sql.ConnectionPool(sqlConfig);
        try {
            await connection.connect();
            const result = await connection.request()
            .input('filter', sql.VarChar(50), filter)
            .execute('getFilteredProducers');
            return result.recordset;
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            await connection.close();
        }
        }
        

}