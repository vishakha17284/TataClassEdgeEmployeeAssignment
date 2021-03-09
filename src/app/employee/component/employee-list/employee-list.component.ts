import { getAllEmployees } from './../../store/employee.selectors';
import { employeeActionTypes } from './../../store/employee.actions';
import { AppState } from './../../../reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from './../../model/employee.model';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

employees$:Observable<Array<Employee>>;
employeeToBeUpdated:Employee;
isUpdateActivated=false;

constructor(private employeeService: EmployeeService, private store: Store<AppState>){
    console.log("con")
}

ngOnInit(){
    console.log("com",this.store,this.employees$)
    this.employees$=this.store.select(getAllEmployees);
}

deleteEmployee(employeeId:number){
    this.store.dispatch(employeeActionTypes.deleteEmployee({employeeId}));
}

showUpdateForm(employee:Employee){
this.employeeToBeUpdated={...employee};
this.isUpdateActivated=true;
}

updateEmployee(updateForm){
    const update:Update<Employee>={
        id:this.employeeToBeUpdated.id,
        changes:{
            ...this.employeeToBeUpdated,
            ...updateForm.value
        }
    };
    this.store.dispatch(employeeActionTypes.updateEmployee({update}));

this.isUpdateActivated=false;
this.employeeToBeUpdated=null;
}

}