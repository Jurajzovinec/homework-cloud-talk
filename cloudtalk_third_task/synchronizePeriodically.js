const syncAll = require('./sequelize/sql_synchronization/syncAll');

const cron = require('node-cron');
const shell = require('shelljs');

// run synchronization every 10 minutes.
cron.schedule("* */10 * * * *", () => {
    syncAll();
    if(shell.exec("dir").code !==0){
        console.log('SomethingWentWrong');
    }
});