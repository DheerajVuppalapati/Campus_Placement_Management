import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './Component/student-list/student-list.component';
import { CreateStudentComponent } from './Component/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './Component/department-list/department-list.component';
import { CreateDepartmentComponent } from './Component/create-department/create-department.component';
// import { DepartmentListComponent } from './Component/department-list/department-list.component';
// import { CreateDepartmentComponent } from './Component/create-department/create-department.component';
// import { StaffListComponent } from './Component/staff-list/staff-list.component';
// import { CreateStaffComponent } from './Component/create-staff/create-staff.component';

// import { CompanyListComponent } from './Component/company-list/company-list.component';
// import { CreateCompanyComponent } from './Component/create-company/create-company.component';
// import { PlacementListComponent } from './Component/placement-list/placement-list.component';
// import { CreatePlacementComponent } from './Component/create-placement/create-placement.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    DepartmentListComponent,
    CreateDepartmentComponent,
    // StaffListComponent,
    // CreateStaffComponent,
    
    // CompanyListComponent,
    // CreateCompanyComponent,
    // PlacementListComponent,
    // CreatePlacementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
