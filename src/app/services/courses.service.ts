import { Injectable } from '@angular/core';

type faculty = 'Health Science' | 'Science' | 'Engineering';

export interface courseType {
  id: string;
  image: string
  title: string;
  description: string;
  instructor: string;
  faculty: faculty;
  studentsCount: number;
  rating: number;
}

@Injectable({ providedIn: 'root' })
export class CourseService {
  courses: courseType[] = [
    // Science Faculty
    {
      id: 'SCI101',
      image: 'courses/data_science.avif',
      title: 'Data Science',
      description: 'Introduction to data science and machine learning.',
      instructor: 'Dr. John Smith',
      faculty: 'Science',
      studentsCount: 120,
      rating: 4.8,
    },
    {
      id: 'SCI102',
      image: 'courses/data_science.avif',
      title: 'Web Development',
      description: 'Learn full-stack web development with modern technologies.',
      instructor: 'Prof. Sarah Khan',
      faculty: 'Science',
      studentsCount: 95,
      rating: 4.6,
    },
    {
      id: 'SCI103',
      image: 'courses/data_science.avif',
      title: 'Artificial Intelligence',
      description: 'Fundamentals of AI, deep learning, and neural networks.',
      instructor: 'Dr. Michael Adams',
      faculty: 'Science',
      studentsCount: 105,
      rating: 4.9,
    },

    // Engineering Faculty
    {
      id: 'ENG201',
      image: 'courses/data_science.avif',
      title: 'Mechanical Engineering',
      description: 'Study of mechanical systems and design principles.',
      instructor: 'Dr. John Smith',
      faculty: 'Engineering',
      studentsCount: 85,
      rating: 4.5,
    },
    {
      id: 'ENG202',
      image: 'courses/data_science.avif',
      title: 'Electrical Engineering',
      description:
        'Exploring electrical circuits, power systems, and electronics.',
      instructor: 'Prof. Sarah Khan',
      faculty: 'Engineering',
      studentsCount: 90,
      rating: 4.7,
    },
    {
      id: 'ENG203',
      image: 'courses/data_science.avif',
      title: 'Civil Engineering',
      description: 'Infrastructure design, construction, and urban planning.',
      instructor: 'Dr. Michael Adams',
      faculty: 'Engineering',
      studentsCount: 80,
      rating: 4.4,
    },

    // Health Science Faculty
    {
      id: 'HLT301',
      image: 'courses/data_science.avif',
      title: 'Anatomy and Physiology',
      description: "Study of the human body's structure and function.",
      instructor: 'Dr. John Smith',
      faculty: 'Health Science',
      studentsCount: 100,
      rating: 4.6,
    },
    {
      id: 'HLT302',
      image: 'courses/data_science.avif',
      title: 'Pharmacology',
      description: 'Understanding drugs and their effects on the human body.',
      instructor: 'Prof. Sarah Khan',
      faculty: 'Health Science',
      studentsCount: 85,
      rating: 4.8,
    },
    {
      id: 'HLT303',
      image: 'courses/data_science.avif',
      title: 'Public Health',
      description: 'Examining healthcare policies and disease prevention.',
      instructor: 'Dr. Michael Adams',
      faculty: 'Health Science',
      studentsCount: 95,
      rating: 4.7,
    },
  ];
}
