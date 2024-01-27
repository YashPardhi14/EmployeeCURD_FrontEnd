import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [MatButtonModule,UpperCasePipe,CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
  providers:[HttpClient,EmployeeService],
})
export class EmployeeDetailsComponent implements OnInit{
  
  employeeDetail:Employee|undefined;
 

constructor(private route:ActivatedRoute, private employeeService:EmployeeService){

}




 async ngOnInit(): Promise<void> {
  
  //  this.getEmployee();
    

  try{

    const id = this.route.snapshot.paramMap.get('id');
    const parseId = Number(id);
  console.log(id);
  

    const promiseEmployee =  this.employeeService.getEmployeeById(parseId).toPromise();
    this.employeeDetail = await promiseEmployee;

  }catch(error){
    console.log(error);
    
  }


   
}


// getEmployee():void{
//   // const id=this.route.snapshot.paramMap.get('id') ;
    
//   // const parseId =Number(id);

//   // this.employeeService.getEmployeeById(parseId).subscribe(
//   //   emp=>this.employeeDetail=emp
//   // )


//   // console.log(this.employeeDetail);


//   //#######Using the Rxjx

//   const id = this.route.snapshot.paramMap.get('id');
//     const parseId = Number(id);

//     this.employeeService.getEmployeeById(parseId)
//       .pipe(
//         tap(
//           (emp) => {
//             this.employeeDetail = emp;
            
//           },
//           (error) => {
            
            
//             console.error('Error:', error);
//           }
//         )
//       )
//       .subscribe();

    
      
  
// }






}
