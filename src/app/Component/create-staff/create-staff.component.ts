// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { StaffService } from 'src/app/services/staff.service';
// import { Staff } from 'src/app/Staff';

// @Component({
//   selector: 'app-create-staff',
//   templateUrl: './create-staff.component.html',
//   styleUrls: ['./create-staff.component.css']
// })
// export class CreateStaffComponent implements OnInit {

//   staff: Staff=new Staff();

//   constructor(private staffService: StaffService,private router: Router) { }

//   ngOnInit(): void {
//   }

//   onSubmit()
//   {
//     console.log(this.staff);
//     this.saveStaff(); 
//   }
//   saveStaff(){
//     this.staffService.CreateStaff(this.staff).subscribe(data =>{
//       console.log(data);
//       this.goToStaffList();
//     });
//   }

//   goToStaffList(){
//     this.router.navigate(['/staffs'])
//   }

// }
