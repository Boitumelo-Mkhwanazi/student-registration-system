enum UserRole {
  Student = "student",
  Lecturer = "lecturer",
}

export interface User {
  id?: number ;
  name?: string,
  surname?: string,
  email?: string;
  password?: string;
  role?: UserRole;
  gender?: string,
  address?: string,
  city?: string,
  postal_code?: string,
  country?: string,
  dob?: string,
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
