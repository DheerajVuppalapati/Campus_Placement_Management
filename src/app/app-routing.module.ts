import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from './Component/create-department/create-department.component';
import { CreateStudentComponent } from './Component/create-student/create-student.component';
import { DepartmentListComponent } from './Component/department-list/department-list.component';
// import { CreatePlacementComponent } from './Component/create-placement/create-placement.component';
// import { CreateStaffComponent } from './Component/create-staff/create-staff.component';
// import { CreateStudentComponent } from './Component/create-student/create-student.component';
// import { DepartmentListComponent } from './Component/department-list/department-list.component';
// import { PlacementListComponent } from './Component/placement-list/placement-list.component';
// import { StaffListComponent } from './Component/staff-list/staff-list.component';
import { StudentListComponent } from './Component/student-list/student-list.component';

const routes: Routes = [
  {
    path:'students',component:StudentListComponent
  },
  {
    path:'',redirectTo:'students',pathMatch:'full'
  },
  {
    path:'create-student',component:CreateStudentComponent
  },
  {
    path:'departments',component:DepartmentListComponent
  },
  {
    path:'create-department',component:CreateDepartmentComponent
  },
  // {
  //   path:'staff',component:StaffListComponent
  // },
  // {
  //   path:'create-staff',component:CreateStaffComponent
  // },
  // {
  //   path:'placements',component:PlacementListComponent
  // },
  // {
  //   path:'create-placement',component:CreatePlacementComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
