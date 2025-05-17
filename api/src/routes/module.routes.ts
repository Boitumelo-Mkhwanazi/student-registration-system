import { Request, Response, Router } from "express";
import { ModuleQueryParameters } from "../models/module.interface";
import {
  getAllModules,
  getFaculties,
  getModuleById,
} from "../services/module.service";
import {
  sendBadRequest,
  sendInternalServerError,
  sendOk,
} from "../utils/http.util";
import { getErrorMessage } from "../utils/errors.utils";

export const moduleRouter = Router();

moduleRouter.get("/", async (req: Request, res: Response) => {
  try {
    const search = (req.query.search as string) || "";
    const page = parseInt(req.query.page as string) || 1;
    const per_page = parseInt(req.query.per_page as string) || 10;
    const params: ModuleQueryParameters = { search, page, per_page };

    const modules = await getAllModules(params);
    sendOk(res, modules);
  } catch (error) {
    sendInternalServerError(res, getErrorMessage(error));
  }
});

moduleRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      sendBadRequest(res, "Invalid or missing module ID");
    }

    const result = await getModuleById(id);

    if (!result) {
      sendBadRequest(res, "Module not found");
    }

    sendOk(res, result);
  } catch (error) {
    sendInternalServerError(res, getErrorMessage(error));
  }
});

moduleRouter.get("/all/faculty", async (req: Request, res: Response) => {
  try {
    const result = await getFaculties();

    sendOk(res, result);
  } catch (error) {
    sendInternalServerError(res, getErrorMessage(error));
  }
});
