import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

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
export class CourseService {
  private destroyRef = inject(DestroyRef);
  private httpClient = inject(HttpClient);

  constructor() {
    const subscription = this.httpClient.get("http://localhost:3000/api/module")
    .subscribe({
      next: (responseData) => {
        console.log(responseData)
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

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
    },
    {
      id: 'SCI102',
      image: 'courses/web_development.avif',
      title: 'Web Development',
      description: 'Learn full-stack web development with modern technologies.',
      detailed_description:
        "This course introduces you to the complete web development process from start to finish. You'll begin with HTML, CSS, and JavaScript to build responsive front-end interfaces, then move into back-end development using Node.js and Express. You'll work with databases like MongoDB and PostgreSQL, learning how to create RESTful APIs and integrate them into your web apps. Throughout the course, you’ll apply version control with Git, host projects on platforms like GitHub, and deploy your apps to the web. By the end, you'll be able to build dynamic, full-stack web applications from scratch.",
      instructorId: 'Karabo Morake',
      faculty: 'Science',
      studentsCount: 8,
      rating: 4.6,
      fee: 270.0,
    },
    {
      id: 'SCI103',
      image: 'courses/artificial_intelligence.avif',
      title: 'Artificial Intelligence',
      description: 'Fundamentals of AI, deep learning, and neural networks.',
      detailed_description:
        "Explore the cutting-edge world of artificial intelligence in this comprehensive course. You'll learn the basics of AI, including search algorithms, logic-based agents, and decision-making systems. Then, you'll dive into machine learning and deep learning, working with neural networks, backpropagation, and frameworks like TensorFlow and PyTorch. The course covers topics like natural language processing, computer vision, and reinforcement learning. Hands-on projects will help you understand how to train intelligent systems to recognize patterns, make predictions, and learn from data in real time.",
      instructorId: 'Kabelo Morake',
      faculty: 'Science',
      studentsCount: 105,
      rating: 4.9,
      fee: 170.0,
    },
    {
      id: 'ENG201',
      image: 'courses/mechanical_engineering.avif',
      title: 'Mechanical Engineering',
      description: 'Study of mechanical systems and design principles.',
      detailed_description:
        "This course provides a solid foundation in mechanical engineering principles including statics, dynamics, thermodynamics, and fluid mechanics. You'll learn to analyze the behavior of physical systems, design mechanical components, and apply simulation software for engineering analysis. Real-world case studies and design challenges will help you explore the mechanics of machines, materials, and structures. By the end of the course, you'll be prepared to solve engineering problems with analytical and practical skills that are essential in modern mechanical industries.",
      instructorId: 'Leah Zwane',
      faculty: 'Engineering',
      studentsCount: 12,
      rating: 4.5,
      fee: 250.0,
    },
    {
      id: 'ENG202',
      image: 'courses/electrical_engineering.avif',
      title: 'Electrical Engineering',
      description: 'Exploring electrical circuits, power systems, and electronics.',
      detailed_description:
        "Dive into the core concepts of electrical engineering, starting with circuit analysis and electrical measurements. You'll explore topics such as AC/DC systems, signal processing, and power electronics. This course also covers microcontrollers, digital logic, and basic embedded systems. You'll work on hands-on projects like designing circuits, simulating them using software, and building prototypes. By the end of the course, you'll understand the principles behind electrical devices and systems used in everyday life, and you'll be equipped to troubleshoot and innovate in the field.",
      instructorId: 'Leah Zwane',
      faculty: 'Engineering',
      studentsCount: 90,
      rating: 4.7,
      fee: 320.0,
    },
    {
      id: 'ENG203',
      image: 'courses/civil_engineering.avif',
      title: 'Civil Engineering',
      description: 'Infrastructure design, construction, and urban planning.',
      detailed_description:
        "In this course, you'll learn about the essential aspects of civil engineering, including structural analysis, materials science, and geotechnics. The course explores infrastructure development, transportation systems, and environmental sustainability in construction. You'll use CAD software to draft and simulate construction projects, and study real-world case studies of urban design and public works. From bridges and highways to smart city planning, this course prepares you to design and build safe, efficient, and resilient structures.",
      instructorId: 'Sarah Zwane',
      faculty: 'Engineering',
      studentsCount: 80,
      rating: 4.4,
      fee: 190.0,
    },
    {
      id: 'HLT301',
      image: 'courses/medicine.avif',
      title: 'Medicine',
      description: "Study of the human body's structure and function.",
      detailed_description:
        "This course explores human anatomy, physiology, and the biological systems that support life. You'll gain a deep understanding of how organs, tissues, and cells work together to maintain health. The course also introduces pathology, diagnostics, and clinical skills necessary for medical practice. Using case-based learning and virtual simulations, you’ll build a foundation in disease mechanisms, pharmacological treatments, and patient care protocols. Whether you're pursuing clinical practice or biomedical research, this course offers the knowledge essential for medical fields.",
      instructorId: 'Micheal Adams',
      faculty: 'Health Science',
      studentsCount: 100,
      rating: 4.6,
      fee: 350.0,
    },
    {
      id: 'HLT302',
      image: 'courses/pharmacology.avif',
      title: 'Pharmacology',
      description: 'Understanding drugs and their effects on the human body.',
      detailed_description:
        "Gain in-depth knowledge of pharmacology, including drug classifications, mechanisms of action, and therapeutic uses. This course covers how drugs interact with the human body, side effects, dosing, and drug development. You'll also study pharmacokinetics and pharmacodynamics to understand how drugs are absorbed, metabolized, and eliminated. Real-world examples and clinical scenarios help you apply concepts to patient care. This course is ideal for anyone pursuing careers in healthcare, pharmacy, or clinical research.",
      instructorId: 'Micheal Adams',
      faculty: 'Health Science',
      studentsCount: 234,
      rating: 4.8,
      fee: 240.0,
    },
    {
      id: 'HLT303',
      image: 'courses/bacteria.avif',
      title: 'Public Health',
      description: 'Examining healthcare policies and disease prevention.',
      detailed_description:
        "This course focuses on the health of populations and how to improve it through policy, education, and preventive care. You'll explore topics such as epidemiology, environmental health, health promotion, and global disease control. Learn how to analyze public health data, assess community health needs, and design intervention strategies. You'll examine case studies related to outbreaks, vaccination campaigns, and health equity. By the end, you'll be equipped to contribute to healthier communities through informed policy and public engagement.",
      instructorId: 'Micheal Adams',
      faculty: 'Health Science',
      studentsCount: 95,
      rating: 4.7,
      fee: 290.0,
    },
  ];

  filteredCourses(selectedcourse: string) {
    if (selectedcourse === 'All') {
      return this.courses;
    }
    return this.courses.filter((course) => course.faculty === selectedcourse);
  }

  sortByPopularity(popularityStatus: string) {
    if (popularityStatus === 'Most Popular') {
      return this.courses.filter((course) => course.studentsCount >= 100);
    } else if(popularityStatus === "Least Popular") {
      return this.courses.filter((course) => course.studentsCount < 30)
    }

    return this.courses;
  }
}
