module.exports = {
  HOST: "localhost",
  USER: "root",
  // PASSWORD: "123456",
  // DB: "testdb",
  PASSWORD: "713605@Zhang",
  DB: "groupproject",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
