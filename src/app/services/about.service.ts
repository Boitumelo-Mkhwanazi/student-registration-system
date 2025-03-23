import { Injectable } from "@angular/core";

type role = 'Project Leader' | 'UI/UX Designer' | 'Database Designer' | 'Full Stack Developer' | 'Front-end Developer' | 'Back-end Developer';

export interface memberType {
    id: string,
    userId: string,
    fullName: string,
    picture: string,
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
            picture: 'team-member.png',
            course: 'Computer Science',
            roles: ['UI/UX Designer', 'Database Designer', 'Full Stack Developer'],
            gitHub: 'https://github.com/Boitumelo-Mkhwanazi',
            linkedIn: 'https://www.linkedin.com/in/buti-donovan-mkhwanazi-729144339'
        },
        {
            id: '2',
            userId: 'u2',
            fullName: 'Sinenhlanhla Ntombela',
            picture: 'team-member.png',
            course: 'Computer Science',
            roles: ['Database Designer', 'Full Stack Developer'],
            gitHub: 'https://github.com/Boitumelo-Mkhwanazi',
            linkedIn: 'https://www.linkedin.com/in/sne-cs'
        },
        {
            id: '3',
            userId: 'u3',
            fullName: 'Chipo Machava',
            picture: 'team-member.png',
            course: 'Computer Science',
            roles: ['Database Designer', 'Back-end Developer'],
            gitHub: 'https://github.com/Chipomachava',
            linkedIn: 'https://www.linkedin.com/in/chipo-machava-257558245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
    
            id: '4',
            userId: 'u4',
            fullName: 'Rethabile Khumalo',
            picture: 'team-member.png',
            course: 'Computer Science',
            roles: ['Database Designer', 'Front-end Developer'],
            gitHub: 'https://github.com/RethabileK',
            linkedIn: 'www.linkedin.com/in/rethabile-khumalo-83a0a6217'
        },
    ]
}