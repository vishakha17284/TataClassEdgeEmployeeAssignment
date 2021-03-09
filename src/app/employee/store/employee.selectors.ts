import { EmployeeState } from './employee.reducers';
import { Employee } from './../model/employee.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './employee.reducers';

export const employeeFeatureSelector = createFeatureSelector<EmployeeState>('employees');
console.log("selector",employeeFeatureSelector)
export const getAllEmployees = createSelector(
  employeeFeatureSelector,
  selectAll
);

export const areEmployeesLoaded = createSelector(
  employeeFeatureSelector,
  (state:EmployeeState) => {
      console.log("state selector",state)
      return state?.employeesLoaded}
);
