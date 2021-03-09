import { Employee } from './../model/employee.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadEmployees= createAction(
    '[Employees List] Load Employees via Service',
);

export const employeesLoaded= createAction(
    '[Employees Effect] Employees Loaded Successfully',
    props<{employees: Employee[]}>()
);

export const createEmployee= createAction(
    '[Create Employee Component] Create Employee',
props<{employee: Employee}>()
);

export const deleteEmployee = createAction(
    '[Employees List Operations] Delete Employee',
    props<{employeeId:number}>()
);

export const updateEmployee = createAction(
    '[Employees List Operations] Update Employee',
props<{update: Update<Employee>}>());

export const employeeActionTypes={
    loadEmployees,
    employeesLoaded,
    createEmployee,
    deleteEmployee,
    updateEmployee
}