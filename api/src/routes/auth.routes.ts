import { Request, Response, Router } from "express";
import {
  sendBadRequest,
  sendUnauthorized,
  sendInternalServerError,
  sendOk,
} from "../utils/http.util";
import * as UserService from "../services/user.service";
import { User } from "../models/user.interface";
import { getErrorMessage } from "../utils/errors.utils";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRouter = Router();

const secretKey = `${process.env.JWT_SECRET}`;

authRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    // Bad request for undefined users
    if (user == null || user == undefined) {
      sendBadRequest(res);
      return;
    }

    // Process defined users
    if (user) {
      const result = await UserService.upsertUser(user);

      if (result) {
        sendOk(res, result);
        return;
      }
    }
  } catch (error) {
    // Internal server
    sendInternalServerError(res, getErrorMessage(error));
  }
});

authRouter.post("/login", async (req: Request, res: Response) => {
  // this will just extract the email and password only
  const logInInfo: User = req.body;

  var user: any;
  try {
    // check if user exists
    const results = await UserService.getUserByEmail(logInInfo.email);
    user = results[0];
  } catch (error) {
    sendInternalServerError(res, getErrorMessage(error));
  }

  try {
    // const isMatching = await bcrypt.compare(logInInfo.password, user.password);
    // if (!isMatching) {
    //   sendUnauthorized(res, "Passwords do not match");
    // }

    const token = jwt.sign(
      {
        id: user.id,
        // add anthing else you need here
        // e.g firstname: user.firstname
      },
      secretKey,
      { expiresIn: "9h", algorithm: "HS256" }
    );

    sendOk(res, token);
  } catch (error) {
    sendInternalServerError(res, getErrorMessage(error));
  }
});
