import { User } from "../models/user.interface";
import { query } from "../utils/db.util";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const upsertUser = async (user: User) => {
  // Hash password
  const password = await bcrypt.hash(
    user.password,
    parseInt(`${process.env.BCRYPT_SALT}`)
  );

  // If id is null, insert a new user
  if (user.id == null) {
    const result = await query(
      `INSERT INTO user(email, password, role)
           VALUES (?, ?, ?);`,
      [user.email, password, user.role]
    );
    return result;
  }
  // If id is provided, attempt to insert or update
  else {
    const result = await query(
      `INSERT INTO user(id, email, password, role)
           VALUES (?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE email = VALUES(email), password = VALUES(password), role = VALUES(role);`,
      [user.id, user.email, password, user.role]
    );
    return result;
  }
};

export const getUserById = async (id: number) => {
  return await query("SELECT * FROM user WHERE id = ?", [id]);
};

export const getUserByEmail = async (email: string) => {
  return await query("SELECT * FROM user WHERE email ?", [email])
}