import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl="http://localhost:8080/student";
  constructor(private httpClient : HttpClient) { }

  getStudentList() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  createStudent(student: Student) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/{branch}`,student);
  }
}
