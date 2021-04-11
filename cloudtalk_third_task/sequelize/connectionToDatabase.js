const Sequelize = require("sequelize");
const config = require('./config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        define: {
            timestamps: false
        }
    }
);

console.log('\x1b[36m%s\x1b[0m', `Connected to ${config.development.database} database hosted on ${config.development.host} server.`);

module.exports = sequelize;
global.sequelize = sequelize;