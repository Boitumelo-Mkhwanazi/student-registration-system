import { ModuleQueryParameters } from "../models/module.interface";
import { query } from "../utils/db.util";

// Gets all modules based off the given query parameters
export const getAllModules = async (queryParams: ModuleQueryParameters) => {
  const { search, page, per_page } = queryParams;

  const offset = (page - 1) * per_page;
  const searchQuery = `%${search}%`;

  const sql = `
    SELECT 
    m_filtered.id AS course_id,
    f.name AS faculty_name,
    m_filtered.name AS course_name,
    COUNT(r.student_id) AS number_of_students,
    ROUND(AVG(r.percentage), 2) AS average_percentage
    FROM (
        SELECT *
        FROM student_registration.module
        WHERE name LIKE CONCAT('%', ?, '%') OR overview LIKE CONCAT('%', ?, '%')
        LIMIT ? OFFSET ?
    ) AS m_filtered
    JOIN student_registration.faculty f ON m_filtered.faculty_id = f.id
    LEFT JOIN student_registration.registration r ON m_filtered.id = r.module_id
    GROUP BY f.name, m_filtered.id, m_filtered.name
    ORDER BY f.name, m_filtered.name;

  `;

  const modules = await query(sql, [
    searchQuery,
    searchQuery,
    per_page,
    offset,
  ]);
  return modules;
};

// Gets a single module with full details
export const getModuleById = async (id: number) => {
  return await query(
    `
    SELECT 
        m.id AS course_id,
        m.name AS course_name,
        m.description,
        m.overview,
        m.fee AS course_price,
        m.level,
        m.prerequisite,
        f.name AS faculty_name,

        COUNT(DISTINCT r.student_id) AS number_of_students,
        ROUND(AVG(r.percentage), 2) AS average_course_rating,

        CONCAT(u.name, ' ', u.surname) AS instructor_name,

        COUNT(DISTINCT m2.id) AS total_courses_by_instructor,
        ROUND(AVG(r2.percentage), 2) AS instructor_avg_course_rating

    FROM student_registration.module m
    JOIN student_registration.faculty f ON m.faculty_id = f.id
    JOIN student_registration.lecturer l ON m.lecturer_id = l.id
    JOIN student_registration.user u ON l.user_id = u.id

    LEFT JOIN student_registration.registration r ON m.id = r.module_id
    LEFT JOIN student_registration.module m2 ON m2.lecturer_id = l.id
    LEFT JOIN student_registration.registration r2 ON m2.id = r2.module_id

    WHERE m.id = ?
    
    GROUP BY 
        m.id, f.name, u.name, u.surname,
        m.name, m.description, m.overview,
        m.fee, m.level, m.prerequisite
    `,
    [id]
  );
};

// Get all faculties
export const getFaculties = async () => {
  return await query("SELECT * FROM faculty");
};

// Get modules with more than 100 students
export const getTopModules = async () => {};

// Get modules a student is registerd for
export const getStudentModules = async () => {};
