import { Routes } from '@angular/router';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { ProfileComponent } from 'app/profile/profile/profile.component';
import { OthersComponent } from './others/others.component'

export const designDemoRoutes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: OthersComponent }
];
