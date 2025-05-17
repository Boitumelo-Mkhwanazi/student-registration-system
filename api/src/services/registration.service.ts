import { query } from "../utils/db.util";

// Registers a module
export async function registerModule(
  studentId: number,
  moduleId: number
): Promise<void> {
  const sql = `
    INSERT INTO Registration (student_id, module_id, registration_date)
    VALUES (?, ?, CURDATE())
  `;
  await query(sql, [studentId, moduleId]);
}

// Get a list of registred modules
export async function getRegisteredModules(userId: number) {
  const [rows] = await query(
    `
    SELECT 
      m.id AS module_id,
      m.name AS module_name,
      m.description,
      m.fee,
      m.level,
      m.prerequisite,
      m.overview,
      r.registration_date,
      r.score_mark,
      r.percentage
    FROM 
      User u
    JOIN 
      Student s ON u.id = s.user_id
    JOIN 
      Registration r ON s.id = r.student_id
    JOIN 
      Module m ON r.module_id = m.id
    WHERE 
      u.id = ?
    `,
    [userId]
  );

  return rows;
}

// Gets registred module by id
export async function getRegisteredModulesByUserId(userId: number) {
  const sql = `
    SELECT 
      m.id AS module_id,
      m.name AS module_name,
      m.description,
      m.fee,
      m.overview,
      m.level,
      m.prerequisite,
      f.name AS faculty_name,
      u.name AS lecturer_name,
      r.registration_date,
      r.score_mark,
      r.percentage
    FROM User AS stu
    JOIN Student s ON stu.id = s.user_id
    JOIN Registration r ON s.id = r.student_id
    JOIN Module m ON r.module_id = m.id
    JOIN Faculty f ON m.faculty_id = f.id
    JOIN Lecturer l ON m.lecturer_id = l.id
    JOIN User u ON l.user_id = u.id
    WHERE stu.id = ?
  `;

  const [rows] = await query(sql, [userId]);
  return rows;
}
