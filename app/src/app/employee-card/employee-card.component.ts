import { Component ,Input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee';
import { Route, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
@Input() employee:Employee|undefined;
constructor(private routes:Router){
  
}
viewDetails(emp:Employee|undefined){
this.routes.navigate(['/details',emp?.id]);
}
}
