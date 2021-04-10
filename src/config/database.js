module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'Visitors',
    define: {
        timestamps: true, //define BD sempre criar created_at updated_at
        underscored: true, // define padrão do BD como snake_case
    },
};