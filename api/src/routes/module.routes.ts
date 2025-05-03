import { Request, Response, Router } from "express";
import { ModuleQueryParameters } from "../models/module.interface";
import { getAllModules, getModuleById } from "../services/module.service";
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
    const perPage = parseInt(req.query.perPage as string) || 10;

    const params: ModuleQueryParameters = { search, page, perPage };

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
