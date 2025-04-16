import { Injectable } from "@angular/core";

export interface cardType {
    id: string,
    title: string,
    description: string,
    icon: string
}

export interface stepCardType {
    id: string,
    title: string,
    description: string
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
            id: '3',
            title: 'Smart, Scalable, and Secure',
            description: 'A modern learning management system built for growth, accessibility, and seamless integration with your institution',
            icon: 'lock-closed-outline'
        }
    ]

    stepsArray : stepCardType[] = [
        {
            id: '1',
            title: 'Create an account',
            description: 'Sign up and set up your account from the dashboard'
        },
        {
            id: '2',
            title: 'Enroll in Courses',
            description: 'Browse available courses, enroll with a click, and track your progress seamlessly'
        },
        {
            id: '3',
            title: 'Stay Organized & Succeed',
            description: 'Sign up and set up your account from the dashboard'
        }
    ]
}