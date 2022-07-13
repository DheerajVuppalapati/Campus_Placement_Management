import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/Department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {


  department: Department = new Department();


  constructor(private departmentservice : DepartmentService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.department);
    this.saveDepartment();
  }

  saveDepartment(){
    this.departmentservice.createDepartment(this.department).subscribe(data => {
      console.log(data);
      this.goToDepartmentList();
    });
  }

  goToDepartmentList(){this.router.navigate(['/departments'])}

}
