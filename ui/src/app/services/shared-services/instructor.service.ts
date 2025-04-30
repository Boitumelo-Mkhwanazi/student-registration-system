import { Injectable } from "@angular/core";

export interface instructorType {
    id: string,
    userId: string,
    image: string,
    title: string,
    firstName: string,
    lastName: string,
    description: string,
    coursesCount: number,
    facultyID: string
}

@Injectable({ providedIn: 'root' })
export class InstructorService {
    instructors: instructorType[] = [
        {
          id: 'INS001',
          userId: 'dr_john_smith',
          image: 'instructors/john_smith.jpg',
          title: 'Dr.',
          firstName: 'John',
          lastName: 'Smith',
          description: "John is a brilliant educator, whose life was spent for computer science and love of nature.",
          coursesCount: 3,
          facultyID: 'Science'
        },
        {
          id: 'INS002',
          userId: 'prof_sarah_khan',
          image: 'instructors/sarah_khan.jpg',
          title: 'Prof.',
          firstName: 'Sarah',
          lastName: 'Khan',
          description: "Sarah is a passionate technologist and educator known for empowering future engineers through hands-on, modern teaching.",
          coursesCount: 3,
          facultyID: 'Engineering'
        },
        {
          id: 'INS003',
          userId: 'dr_michael_adams',
          image: 'instructors/michael_adams.jpg',
          title: 'Dr.',
          firstName: 'Michael',
          lastName: 'Adams',
          description: "Michael is a dedicated health science expert who bridges complex medical theories with real-world applications in public health.",
          coursesCount: 3,
          facultyID: 'Health Science'
        },
        {
          id: 'INS004',
          userId: 'prof_leah_zwane',
          image: 'instructors/leah_zwane.jpg',
          title: 'Prof.',
          firstName: 'Leah',
          lastName: 'Zwane',
          description: "Leah is an enthusiastic engineering mentor with a deep commitment to innovation and student success.",
          coursesCount: 0,
          facultyID: 'Engineering'
        },
        {
          id: 'INS005',
          userId: 'dr_kabelo_morake',
          image: 'instructors/kabelo_morake.jpg',
          title: 'Dr.',
          firstName: 'Kabelo',
          lastName: 'Morake',
          description: "Kabelo is a research-driven scientist who thrives on data, discovery, and mentoring the next generation of thinkers.",
          coursesCount: 0,
          facultyID: 'Science'
        }
      ];
      
}