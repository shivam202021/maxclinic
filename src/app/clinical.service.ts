import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicalService {
  baseurl:string ="https://reqres.in/api/users"
  ppostUrl:string ="http://localhost:3000/employees"
  postUrl: string ="https://reqres.in/api/users/"
 constructor(private http:HttpClient) { }

 getUser():Observable<any>{
   return this.http.get(this.postUrl).pipe(map((res)=>{
     return res;
   }))
 }
//  postUser(data:any):Observable<any>{
//    return this.http.post(this.postUrl,data).pipe(map((res)=>{
//      return res;
//    }))
//  }
 postUser(data:any):Observable<any>{
  return this.http.post(this.postUrl,data).pipe(map((res)=>{
    return res;
  }))
}
//  updateUser(id:number,data:any):Observable<any>{
//    return this.http.put(`http://localhost:3000/employees/${id}`,data).pipe(map((res)=>{
//      return res;
//    }))
//  }
 updateUser(id:number,data:any):Observable<any>{
  return this.http.put(`https://reqres.in/api/users/${id}`,data).pipe(map((res)=>{
    return res;
  }))
}
//  deleteUser(id:number):Observable<any>{
//    return this.http.delete(`http://localhost:3000/employees/${id}`).pipe(map((res)=>{
//      return res;
//    }))
//  }
 deleteUser(id:number):Observable<any>{
  return this.http.delete(`https://reqres.in/api/users/${id}`).pipe(map((res)=>{
    return res;
  }))
}
  //  baseurl:string ="https://apimaxcare.newtechtest.in/api/Clinic/GetClinicList?Page=1&PageSize=1000"
  //  postUrl:string ="https://apimaxcare.newtechtest.in/api/Clinic/InsertClinic"
  //  updateUrl: string ="https://apimaxcare.newtechtest.in/api/Clinic/UpdateClinic"
  //  zipUrl:string="https://apimaxcare.newtechtest.in/api/Common/GetCityAndStateByZipCode/"
  // constructor(private http:HttpClient) { }
  // getCityStateByZipCode(zipcode:number){
  //   return this.http.get(this.zipUrl+zipcode).pipe(map((res)=>{
  //     return res;
  //   }))
  // }
  // getMaxClinic(){
  //   return this.http.get(this.baseurl).pipe(map((res)=>{
  //     return res;
  //   }))
  // }
  // postMaxClinic(data:any){
  //   return this.http.post(this.postUrl,data).pipe(map((res)=>{
  //     return res;
  //   }))
  // }
  // updateMaxClinic(data:any){
  //   return this.http.post(this.updateUrl,data).pipe(map((res)=>{
  //     return res;
  //   }))
  // }
  // deleteClinic(id:number){
  //   return this.http.delete(this.baseurl+id).pipe(map((res)=>{
  //     return res;
  //   }))
  // }
}
