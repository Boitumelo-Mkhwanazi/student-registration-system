import express, { Request, Response } from "express";
import cors from "cors";
import { pool, query } from "./utils/db.util";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes";
const app = express();

const PORT = process.env.PORT;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);

// Listener
app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);

  // Database init
  try {
    // Try to get a connection from the pool
    const connection = await pool.getConnection();
    await connection.ping(); // optional: confirms it's alive
    connection.release(); // always release it after use

    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
