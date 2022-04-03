require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'node-sequelize',
    define:{
        timestamps: true,
        underscored: true,
    },

};