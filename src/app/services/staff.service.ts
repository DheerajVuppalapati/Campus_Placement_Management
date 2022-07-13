// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Staff } from '../Staff';

// @Injectable({
//   providedIn: 'root'
// })
// export class StaffService {

//   private baseUrl="http://localhost:8080/staff"
//   constructor(private httpClient : HttpClient) { }

//   getStaffList() : Observable<Staff[]>{
//     return this.httpClient.get<Staff[]>(`${this.baseUrl}`);

    
//   }
//   CreateStaff(staff : Staff) : Observable<any>{
//     return this.httpClient.post(`${this.baseUrl}`,staff);
    
//   }
// }
