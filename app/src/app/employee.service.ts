import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASE_URL='http://localhost:8080/employee';

  constructor(private http:HttpClient) { }

// allEmployee:Employee[]=[
//   {
//     "id": 1,
//     "name": "Monali",
//     "department": "CS"
// },
// {
//     "id": 2,
//     "name": "Yash",
//     "department": "Civil"
// },
// {
//     "id": 3,
//     "name": "Megha",
//     "department": "Mathematics"
// },
// {
//     "id": 4,
//     "name": "Bhavna",
//     "department": "Commerce"
// },
// {
//     "id": 8,
//     "name": "Kunal",
//     "department": "BackEnd"
// },
// {
//     "id": 13,
//     "name": "Vibhuti",
//     "department": "Pyari"
// }
// ]


// getAllEmployee():Employee[]{
//   return this.allEmployee;
// }

getAllEmployee():Observable<Employee[]>{

  return this.http.get<Employee[]>(this.BASE_URL);
}

getEmployeeById(id:number):Observable<Employee|undefined>{

  return this.http.get<Employee|undefined>(this.BASE_URL+'/'+id);
}
// getEmployeeById(id:number):Employee|undefined{
//   return this.allEmployee.find(emp=>emp.id===id);
// }

}
