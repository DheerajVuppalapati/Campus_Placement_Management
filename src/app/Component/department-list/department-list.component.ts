import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments !: Department[];
  constructor(private departmentservice : DepartmentService){ }

  ngOnInit(): void {
    this.getDepartment();
  }

  private getDepartment(){
    this.departmentservice.getDepartmentList().subscribe(data =>{
      this.departments = data;
    })
  }

}
