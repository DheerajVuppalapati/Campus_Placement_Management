// import { Component, OnInit } from '@angular/core';
// import { Placement } from 'src/app/Placement';
// import { PlacementService } from 'src/app/services/placement.service';

// @Component({
//   selector: 'app-placement-list',
//   templateUrl: './placement-list.component.html',
//   styleUrls: ['./placement-list.component.css']
// })
// export class PlacementListComponent implements OnInit {

//   placements !: Placement[];
//   constructor(private placementService: PlacementService) { }

//   ngOnInit(): void {
//     this.getPlacement();
//   }

//   private getPlacement(){
//     this.placementService.getPlacementList().subscribe(data => {
//       this.placements = data;

//     })
//   }

// }
