enum UserRole {
  Student = "student",
  Lecturer = "lecturer",
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}

export interface Student {
  id: number;
  user_id: number;
  faculty_id: number;
}

export interface Lecturer {
  id: number;
  user_id: number;
  faculty_id: number;
}
