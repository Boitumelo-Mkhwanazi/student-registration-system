import { Injectable } from "@angular/core";

export interface cardType {
    id: string,
    title: string,
    description: string,
    icon: string
}

@Injectable ({ providedIn: 'root' })
export class HomeService {
    cardsArray : cardType[] = [
        {
            id: '1',
            title: 'Stay Organized & On Track',
            description: 'Manage your courses, deadlines, and grades effortlessly—all in one system designed to keep you ahead.',
            icon: 'calendar-outline'
        },
        {
            id: '2',
            title: 'Simplify Administration',
            description: 'A centralized platform to handle enrollments, student data, and course structures with minimal effort.',
            icon: 'folder-outline'
        },
        {
            id: '2',
            title: 'Smart, Scalable, and Secure',
            description: 'A modern learning management system built for growth, accessibility, and seamless integration with your institution',
            icon: 'lock-closed-outline'
        }
    ]
}