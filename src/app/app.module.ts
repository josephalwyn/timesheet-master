import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { TimesheetService  } from './services/timesheet.service';
import { timesheetComponent } from './TimeSheet/timesheet.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import{Ng2CompleterModule} from 'ng2-completer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    timesheetComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    Ng2SmartTableModule,Ng2CompleterModule,FormsModule
  ],
  providers: [
    EmployeeService,TimesheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
