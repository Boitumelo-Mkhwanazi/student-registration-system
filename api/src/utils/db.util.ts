import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create database connection pool
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Executes a SQL query with optional parameters.
 * @param sql - The SQL query string
 * @param params - An array of query parameters (optional)
 * @returns The result rows
 */
export const query = async <T extends mysql.ResultSetHeader = any>(sql: string, params?: any[]): Promise<T[]> => {
  const [rows] = await pool.query<T[]>(sql, params);
  return rows;
};
