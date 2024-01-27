import { Component, Injectable, OnInit, inject } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,EmployeeCardComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient, EmployeeService], 
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAllEmployee()
      .subscribe(employees => {
        this.employees = employees;
      });
  }
  

  // employees!:Observable<any[]>

  // constructor(private employeeService:EmployeeService){

  // }


  // ngOnInit(): void {
  //   this.employees=this.employeeService.getAllEmployee();

  //   console.log(this.employees);
    
  // }



}
