import { Request, Response, Router } from "express";
import {
  sendBadRequest,
  sendInternalServerError,
  sendOk,
} from "../utils/http.util";
import * as UserService from "../services/user.services";
import { User } from "../models/user.interface";
import { getErrorMessage } from "../utils/errors.utils";

export const userRouter = Router();

userRouter.post("/user", async (req: Request, res: Response) => {
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


userRouter.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);

    // If the id is not defined or the id is not a number, send bad request
    if (!id || isNaN(id)) {
      sendBadRequest(res);
      return;
    }

    const result = await UserService.getUserById(id);
    
    if (result) {
      sendOk(res, result);
      return;
    }
} catch (error) {
    // Internal server error
    sendInternalServerError(res, getErrorMessage(error));
  }
});
