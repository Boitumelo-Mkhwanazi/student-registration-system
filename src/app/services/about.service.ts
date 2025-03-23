import { Injectable } from "@angular/core";

type role = 'Project Leader' | 'UI/UX Designer' | 'Database Designer' | 'Full Stack Developer' | 'Front-end Developer' | 'Backend Developer';

export interface memberType {
    id: string,
    userId: string,
    fullName: string,
    course: 'Computer Science',
    roles: role[],
    gitHub: string,
    linkedIn: string
}

@Injectable ({ providedIn: 'root' })
export class AboutService {
    members : memberType[] = [
        {
            id: '1',
            userId: 'u1',
            fullName: 'Boitumelo Mkhwanazi',
            course: 'Computer Science',
            roles: ['UI/UX Designer', 'Database Designer', 'Full Stack Developer'],
            gitHub: 'https://github.com/Boitumelo-Mkhwanazi',
            linkedIn: 'https://www.linkedin.com/in/buti-donovan-mkhwanazi-729144339'
        },
    ]
}