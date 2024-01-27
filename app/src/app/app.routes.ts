import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'details/:id',
        component:EmployeeDetailsComponent,
    }
];
