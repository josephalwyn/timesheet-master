import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class TimesheetService {
    private baseapi = environment.apiUrl;
    
    constructor(private http: HttpClient) { }

    getTimesheet(employeeid) {
        return this.http.get(this.baseapi + "/employee/gettimesheet?id="+employeeid);
    }
    UpdateTask(taskdetails) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin': '*'
            })
          };
          console.log("{'timesheet':"+JSON.stringify(taskdetails)+"}");
        return this.http.post(this.baseapi + "/employee/updatetask","{'timesheetmodel':"+JSON.stringify(taskdetails)+"}",httpOptions );
    }
    gettasklist()
    {
        return this.http.get(this.baseapi + "/employee/gettasklist");
    }
}