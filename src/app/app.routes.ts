import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './shared-ui/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutUsComponent,
    },
    {
        path: 'contact',
        component: ContactUsComponent,
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
        component: CoursesComponent,
    }
];
