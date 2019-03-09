import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";
import { TimesheetService} from '../services/timesheet.service';
import { EmployeeService} from '../services/employee.service';
import {Ng2SmartTableModule } from 'ng2-smart-table'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'Timesheet-list',
    templateUrl: 'timesheet.component.html',
    styleUrls:['./timesheet.component.scss']
})

export class timesheetComponent implements OnInit {
    timesheettask: any;
    employees: any;
    timesheetlist:any;
    selemployee:any;
    selemployeeid:any
 
    constructor(private TimesheetService: TimesheetService,private router: Router,private EmployeeService: EmployeeService,private Ng2SmartTableModule:Ng2SmartTableModule) { 
      
    }

    ngOnInit() {
        
        this.EmployeeService.getallemployees().subscribe(data => {
            this.employees = data;
            
        });

        
        
        
    }
    ddChange(vv:any) {
        console.log(vv);
        if(vv!=0)
        {
          this.selemployee=true;
          this.selemployeeid=vv;
        }
        else
        {
          this.selemployee=false;
          this.selemployeeid=vv;
        }
       
        this.TimesheetService.getTimesheet(vv).subscribe(data => {
            this.timesheettask = data;
            console.log(data);
              
            
        });
    }
    AddTask()
    {
      this.TimesheetService.gettasklist().subscribe(data => {
        this.timesheetlist = data;
        
    });
      this.timesheettask.push({        
        createdDate: null,
employeeDetails: null,
employeeId: this.selemployeeid,
friday: null,
monday: null,
saturday:null,
sunday: null,
taskDetails: null,
taskId: null,
taskname:null,
thursday: null,
timeSheetId: null,
tuesday: null,
wednesday: null,
        show:true
      });
    }
    SaveTimesheet()
    {

      this.TimesheetService.UpdateTask(this.timesheettask).subscribe(data => {
        this.timesheettask = data;
        
        alert("Timesheet updated successfully.")
          
        
    });
      console.log(this.timesheettask);
    }
    navemployee(): void {
        this.router.navigate(['EmployeeList']);
      };
      settings = {
        columns: {
            taskId: {
            title: 'Task'
          },
          sunday: {
            title: 'Sunday'
          },
          monday: {
            title: 'Monday'
          },
          tuesday: {
            title: 'Tuesday'
          },
          wednesday: {
            title: 'Wednesday'
          },
          thursday: {
            title: 'Thursday'
          },
          friday: {
            title: 'Friday'
          },
          saturday: {
            title: 'Saturday'
          }
        }
      };
}
