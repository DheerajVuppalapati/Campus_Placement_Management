import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl="http://localhost:8080/department";

  constructor(private httpClient : HttpClient) { }

  getDepartmentList() : Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseUrl}`);
  }
  createDepartment(department : Department): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,department);
  }
}
