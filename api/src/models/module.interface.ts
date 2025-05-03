// src/models/module.interface.ts

export interface Module {
  id: number;
  name: string;
  description: number;
  fee: number;
  overview: string;
  level: string;
  prerequisite?: string;
  faculty_id?: number;
  lecture_id?: number;
}

export interface ModuleQueryParameters {
  search: string;
  page: number;
  perPage: number;
}
