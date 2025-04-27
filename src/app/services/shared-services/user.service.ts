import { Injectable } from "@angular/core";

type faculty = 'Health Science' | 'Science' | 'Engineering';

export interface courseType {
  id: string;
  image: string
  title: string;
  description: string;
  detailed_description: string,
  instructorId: string;
  faculty: faculty;
  studentsCount: number;
  rating: number;
  fee: number
}

@Injectable({ providedIn: 'root' })
export class userService {
    courses: courseType[] = [
        {
            id: 'SCI101',
            image: 'courses/data_science.avif',
            title: 'Data Science',
            description: 'Introduction to data science and machine learning.',
            detailed_description:
              "In this course, you'll dive into the core concepts of data science, starting with data collection, cleaning, and analysis. You'll learn how to use tools like Python, Pandas, and SQL to manipulate data, and uncover insights through data visualization with libraries like Matplotlib and Seaborn. The course will guide you through building machine learning models using scikit-learn, helping you understand key algorithms such as linear regression, decision trees, and clustering. By the end, you'll be able to turn raw data into actionable insights, solve real-world problems, and make data-driven decisions with confidence.",
            instructorId: 'John Smith',
            faculty: 'Science',
            studentsCount: 120,
            rating: 4.8,
            fee: 150.0,
          }
    ]

    addNewCourse(newCourse: courseType) {
        this.courses = [...this.courses, newCourse]
    }
}