import { Router, Request, Response } from "express";
import {
  registerModule,
  getRegisteredModules,
  getRegisteredModulesByUserId,
} from "../services/registration.service";
import {
  sendBadRequest,
  sendInternalServerError,
  sendOk,
} from "../utils/http.util";
import { getErrorMessage } from "../utils/errors.utils";

export const registrationRouter = Router();

// Register a student for a module
registrationRouter.post("/", async (req: Request, res: Response) => {
  const { studentId, moduleId } = req.body;
  if (!studentId || !moduleId) {
    sendBadRequest(res, "Student ID and Module ID required");
  }
  try {
    await registerModule(studentId, moduleId);
    sendOk(res, "Module registered successfully");
  } catch (err) {
    sendInternalServerError(res, "Internal server error");
  }
});

// Get all registered modules for a user
registrationRouter.get("/:id", async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  if (!userId) {
    sendBadRequest(res, "Invalid module ID");
  }
  try {
    const modules = await getRegisteredModules(userId);
    res.json(modules);
  } catch (err) {
    sendInternalServerError(res, getErrorMessage(err));
  }
});

// Get detailed registered modules for a user
registrationRouter.get(
  "/:userId/details",
  async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    if (!userId) {
      sendBadRequest(res, "Invalid user ID");
    }
    try {
      const modules = await getRegisteredModulesByUserId(userId);
      sendOk(res, modules);
    } catch (err) {
      sendInternalServerError(res, getErrorMessage(err));
    }
  }
);
