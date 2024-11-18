import { Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { RegisterComponent } from './Registration/register/register.component';
import { SupportComponent } from './About/support/support.component';


export const routes: Routes = [
  {path: 'Navigation', component: NavigationComponent},
  {path: 'Homepage', component: HomepageComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Support', component: SupportComponent},
  {path: '**', redirectTo: 'Homepage', pathMatch: 'full'},
];
