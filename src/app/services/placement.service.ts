// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Placement } from '../Placement';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlacementService {
//   private baseUrl="http://localhost:8080/placement"

//   constructor(private httpClient : HttpClient) 
//   {
    
    
//    }
//    getPlacementList(): Observable<Placement[]>{
//     return this.httpClient.get<Placement[]>(`${this.baseUrl}`);
//    }

//    createPlacement(placement : Placement):Observable<any>{
//     return this.httpClient.post(`${this.baseUrl}`,placement);
//    }
// }
