//  # datos de conexión MSSQL  
module.exports = {
  server: "localhost",
  port: 1433,
  database: "ProyectoHuayra",
  user: "SA",
  password: "Guardian10",
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true,
    connectionTimeout: 30000, 
    requestTimeout: 30000
  }
};