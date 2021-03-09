import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class EmployeeService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllEmployees(): Observable<Employee[]> {
    console.log("service")
    return this.http.get<Employee[]>('https://reqres.in/api/users?page=1');
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('/api/users', employee);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete('/api/users/' + employeeId);
  }

  updateEmployee(employeeId:number | string, changes: Partial<Employee>): Observable<any> {
    return this.http.put('/api/users/' + employeeId, changes);
  }
}