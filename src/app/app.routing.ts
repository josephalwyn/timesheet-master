import { RouterModule, Routes } from '@angular/router';
import {timesheetComponent} from "./TimeSheet/timesheet.component";
import {EmployeeListComponent} from "./employee/employee.component";

const routes: Routes = [
    { path: 'RouteTimesheet', component: timesheetComponent },
    { path: 'EmployeeList', component: EmployeeListComponent },
    {path : '', component : EmployeeListComponent}
  ];
  
  export const routing = RouterModule.forRoot(routes);