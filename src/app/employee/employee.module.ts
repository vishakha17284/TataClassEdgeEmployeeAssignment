import { EmployeeEffects } from './store/employee.effects';
import { EmployeeService } from './service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './store/employee.reducers';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './component/employee-list/create-employee/create-employee.component';

@NgModule({
  declarations: [EmployeeListComponent,CreateEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  providers: [EmployeeService],
  bootstrap:[],
  exports:[EmployeeListComponent,CreateEmployeeComponent]
})
export class EmployeeModule { }
