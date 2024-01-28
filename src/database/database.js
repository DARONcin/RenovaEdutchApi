import mysql from "mysql2/promise";
import config from "./../config";

const pool=mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port
});

const getConnection = async () => {
    try {
      const connection = await pool.getConnection();
      return connection;
    } catch (error) {
      console.error('Error al obtener la conexión:', error);
      throw error;
    }
  }
  
 module.exports = {
    getConnection
 }