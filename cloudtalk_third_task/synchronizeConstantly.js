
const synchronizeConstantly = async () => {
    
    while (true) {
        
        try {
            const syncAll = require('./sequelize/sql_synchronization/syncAll');
            await syncAll();
        } catch (error) {
            // Log error somewhere
            console.log(error);
        }

    }
    
};


synchronizeConstantly();