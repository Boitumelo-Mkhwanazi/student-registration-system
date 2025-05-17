import { User } from "../models/user.interface";
import { query } from "../utils/db.util";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
export const upsertUser = async (user: User) => {
  const password = await bcrypt.hash(
    user.password,
    parseInt(`${process.env.BCRYPT_SALT}`)
  );

  if (user.id == null) {
    const result = await query(
      `INSERT INTO user (
        name, surname, email, password, role
      ) VALUES (?, ?, ?, ?, ?);`,
      [
        user.name,
        user.surname,
        user.email,
        password,
        "student"
      ]
    );

    return result;
  } else {
    const result = await query(
      `INSERT INTO user (
        id, name, surname, email, password, role, gender,
        address, city, postal_code, country, dob, province
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
        name = VALUES(name),
        surname = VALUES(surname),
        email = VALUES(email),
        password = VALUES(password),
        role = VALUES(role),
        gender = VALUES(gender),
        address = VALUES(address),
        city = VALUES(city),
        postal_code = VALUES(postal_code),
        country = VALUES(country),
        dob = VALUES(dob),
        province = VALUES(province);`,
      [
        user.id,
        user.name,
        user.surname,
        user.email,
        password,
        user.role,
        user.gender,
        user.address,
        user.city,
        user.postal_code,
        user.country,
        user.dob,
        user.province,
      ]
    );

    return result;
  }
};

export const getUserById = async (id: number) => {
  return await query("SELECT * FROM user WHERE id = ?;", [id]);
};

export const getUserByEmail = async (email: string) => {
  return await query("SELECT * FROM user WHERE email = ?;", [email]);
};
