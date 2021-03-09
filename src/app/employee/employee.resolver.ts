import { areEmployeesLoaded } from './store/employee.selectors';
import { loadEmployees, employeesLoaded } from './store/employee.actions';
import { AppState } from './../reducers/index';
import { Employee } from './model/employee.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class EmployeeResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      console.log("state",this.store,state)
    return this.store
    .pipe(
        select(areEmployeesLoaded),
        tap((employeesLoaded) => {
          if (!employeesLoaded) {
            this.store.dispatch(loadEmployees());
          }
        }),
        filter(employeesLoaded => employeesLoaded),
        first()
    );
  }
}