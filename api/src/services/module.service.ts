import { ModuleQueryParameters } from "../models/module.interface";
import { query } from "../utils/db.util";

// Gets all modules based off the given query parameters
export const getAllModules = async (queryParams: ModuleQueryParameters) => {
  const { search, page, perPage } = queryParams;

  const offset = (page - 1) * perPage;
  const searchQuery = `%${search}%`;

  const sql = `
    SELECT * FROM module
    WHERE name LIKE ? OR overview LIKE ?
    LIMIT ? OFFSET ?
  `;

  const modules = await query(sql, [searchQuery, searchQuery, perPage, offset]);
  return modules;
};

// Gets a single module 
export const getModuleById = async (id: number) =>{
    return await query('SELECT * FROM module WHERE id = ?', [id]);
}
