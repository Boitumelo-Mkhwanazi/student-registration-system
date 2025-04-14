import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MemberDialogueComponent } from './pages/about-us/components/member-dialogue/member-dialogue.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'sign-up',
        component: SignInComponent,
    },
    {
        path: 'log-in',
        component: LogInComponent,
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'courses/:courseName',
        component: CourseDetailsComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent,
    },
    
    {
        path: 'about',
        component: AboutUsComponent,
        children: [
            {
                path: ':memberName',
                component: MemberDialogueComponent
            }
        ]
    },
];
