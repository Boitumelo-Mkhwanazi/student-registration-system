import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { MemberDialogueComponent } from './pages/about-us/components/member-dialogue/member-dialogue.component';
import { CourseDetailsComponent } from './shared-ui/courses/course-details/course-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/dashboard/sub-pages/overview/overview.component';
import { ProfileComponent } from './pages/dashboard/sub-pages/profile/profile.component';
import { MyCoursesComponent } from './pages/dashboard/sub-pages/my-courses/my-courses.component';
import { TimetableComponent } from './pages/dashboard/sub-pages/timetable/timetable.component';
import { AssessmentsComponent } from './pages/dashboard/sub-pages/assessments/assessments.component';
import { DepositComponent } from './pages/dashboard/sub-pages/deposit/deposit.component';
import { ModulesComponent } from './pages/dashboard/sub-pages/modules/modules.component';
import { CourseInformationComponent } from './pages/dashboard/sub-pages/modules/course-information/course-information.component';
import { ConfirmationComponent } from './pages/courses/confirmation/confirmation.component';
import { authGuard } from './guards/auth/auth.guard';

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
    component: CoursesComponent,
    // this basically ensures that the person can view only when they are logged in
    // You can do this to other routes this is just an example
    // you can also right your own specific guards to only let
    // lectures access certain pages or only admins just check out Angular guards on how to do that
    canActivate: [authGuard]
  },
  {
    path: 'courses/:courseName',
    component: CourseDetailsComponent
  },
  {
    path: 'courses/:courseName/confirmation',
    component: ConfirmationComponent
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
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'modules',
        component: ModulesComponent,
      },
      {
        path: 'modules/:courseName',
        component: CourseInformationComponent,
      },
      {
        path: 'my-courses',
        component: MyCoursesComponent
      },
      {
        path: 'timetable',
        component: TimetableComponent
      },
      {
        path: 'assessments',
        component: AssessmentsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'deposit',
        component: DepositComponent
      }
    ]
  }
];
