// import { Component, OnInit } from '@angular/core';
// import { StaffService } from 'src/app/services/staff.service';
// import { Staff } from 'src/app/Staff';

// @Component({
//   selector: 'app-staff-list',
//   templateUrl: './staff-list.component.html',
//   styleUrls: ['./staff-list.component.css']
// })
// export class StaffListComponent implements OnInit {

//   staffs !: Staff[];
//   constructor(private staffService: StaffService ) { }

//   ngOnInit(): void {
//     this.getStaff();
//   }

//   private getStaff(){
//     this.staffService.getStaffList().subscribe(data =>{
//       this.staffs = data;
//     })
//   }

// }
