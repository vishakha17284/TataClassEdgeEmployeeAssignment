
import { Employee } from './../model/employee.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { employeeActionTypes, employeesLoaded } from './employee.actions';

export interface EmployeeState extends EntityState<Employee> {
    employeesLoaded:boolean;
}

export const adapter:EntityAdapter<Employee>=createEntityAdapter<Employee>();

export const initialState = adapter.getInitialState({
    employeesLoaded:false
});

export const employeeReducer = createReducer(
    initialState,

    on(employeeActionTypes.employeesLoaded,(state,action)=>{
        return adapter.addMany(
            action.employees,
            {...state,employeesLoaded:true}
        );
    }),

    on(employeeActionTypes.createEmployee,(state,action)=>{
        return adapter.addOne(action.employee,state);
    }),

    on(employeeActionTypes.deleteEmployee,(state,action)=>{
        return adapter.removeOne(action.employeeId,state);
    }),

    on(employeeActionTypes.updateEmployee,(state,action)=>{
        return adapter.updateOne(action.update,state);
    })

);

export const {selectAll,selectIds}=adapter.getSelectors();