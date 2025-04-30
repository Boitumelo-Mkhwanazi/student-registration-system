import { Response } from "express";

// Error Status Codes
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const CONFLICT = 409;
const UNSUPPORTED_MEDIA_TYPE = 415;
const INTERNAL_SERVER_ERROR = 500;

// Success Status Codes
const OK = 200;
const NO_CONTENT = 204;

// OK: 200
export const sendOk = (res: Response, data: any, message = "Success") => {
  return res.status(OK).json({ success: true, message, data });
};

// No Content: 204
export const sendNoContent = (res: Response) => {
  return res.sendStatus(NO_CONTENT);
};

// Bad Request: 400
export const sendBadRequest = (res: Response, message = "Bad Request") => {
  return res.status(BAD_REQUEST).json({ success: false, message });
};

// Unauthorized: 401
export const sendUnauthorized = (res: Response, message = "Unauthorized") => {
  return res.status(UNAUTHORIZED).json({ success: false, message });
};

// Forbidden: 403
export const sendForbidden = (res: Response, message = "Forbidden") => {
  return res.status(FORBIDDEN).json({ success: false, message });
};

// Not Found: 404
export const sendNotFound = (res: Response, message = "Not Found") => {
  return res.status(NOT_FOUND).json({ success: false, message });
};

// Conflict: 409
export const sendConflict = (res: Response, message = "Conflict") => {
  return res.status(CONFLICT).json({ success: false, message });
};

// Unsupported Media Type: 415
export const sendUnsupportedMediaType = (
  res: Response,
  message = "Unsupported Media Type"
) => {
  return res.status(UNSUPPORTED_MEDIA_TYPE).json({ success: false, message });
};

// Internal Server Error: 500
export const sendInternalServerError = (
  res: Response,
  message = "Internal Server Error"
) => {
  return res.status(INTERNAL_SERVER_ERROR).json({ success: false, message });
};
