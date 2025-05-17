import express from "express";
import cors from "cors";
import { pool, query } from "./utils/db.util";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes";
import {authRouter} from "./routes/auth.routes"
import {moduleRouter} from "./routes/module.routes";
import { registrationRouter } from "./routes/registration.routes";
const app = express();

const PORT = process.env.PORT;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
app.use('/api/module', moduleRouter);
app.use('/api/auth', authRouter)
app.use('/api/registration', registrationRouter)

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
