import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students!: Student[];


  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudent();
   
  }

  private getStudent(){
    this.studentService.getStudentList().subscribe(data =>{
      this.students = data;
    })
  }

}
