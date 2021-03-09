import { CreateEmployeeComponent } from './employee/component/employee-list/create-employee/create-employee.component';
import { EmployeeResolver } from './employee/employee.resolver';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeModule } from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    resolve: {
      employees: EmployeeResolver
    }
  },
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers,
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      } }),
  ],
  providers: [EmployeeResolver],
  bootstrap: [AppComponent]
    })

export class AppModule { }
