import { Employee } from './../../../model/employee.model';
import { createEmployee } from './../../../store/employee.actions';
import { AppState } from './../../../../reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }


    const employee: Employee = {id: uuid.v4(), first_name: submittedForm.value.first_name, last_name: submittedForm.value.last_name,email:submittedForm.value.email,avatar:submittedForm.value.avatar};
    this.store.dispatch(createEmployee({employee}));

  }
}