// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Company } from '../Company';

// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyService {
//   private baseUrl="http://localhost:8080/company"
//   constructor(private httpClient : HttpClient) {
    
//    }

//    getCompanyList():Observable<Company[]>{
//     return this.httpClient.get<Company[]>(`${this.baseUrl}`);

//    }
//    createCompany(company : Company):Observable<any>{
//     return this.httpClient.post(`${this.baseUrl}`,company);
//    }
// }
