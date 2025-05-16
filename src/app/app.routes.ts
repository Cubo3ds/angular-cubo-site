import { Routes } from '@angular/router';
import { CvComponent } from './cvCubo3ds/cv/cv.component';

export const routes: Routes = [
    {
        path:'**', component:CvComponent
    }
];
