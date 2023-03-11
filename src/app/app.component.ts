import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Clinic } from './clinic.model';
import { ClinicalService } from './clinical.service';
import { EmpaddeditcomponentComponent } from './empaddeditcomponent.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   title = 'maxclinic';
   displayedColumns: string[] = ['id', 'firstName', 'lastName','Email','Avatar','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // ListResult:any=[];
  // clinicObject:Clinic={
  //   id: 0,
  //   avatar: '',
  //   email: '',
  //   first_name: '',
  //   last_name: ''
  // }
  // UserForm!:FormGroup ;

 constructor(private _dialog:MatDialog,private userService:ClinicalService){}
 ngOnInit(): void {
   this.getUser();
 }
//  this.UserForm=this.fb.group({

//   avatar: [""],
//   email:[""],
//   first_name: [""],
//  last_name: [""],



//  })

  // ngOnInit(): void {
  //   this.getData();

  // }
  // getData(){
  //   this.userservice.getUser().subscribe((res:any)=>{
  //     console.log(res)
  //     this.ListResult=res.data

  //     console.log(this.ListResult)
  //    })
  // }
  // addData(){
  //   this.clinicObject.avatar=this.UserForm.value.avatar
  //   this.clinicObject.email=this.UserForm.value.email
  //   this.clinicObject.first_name=this.UserForm.value.first_name
  //   this.clinicObject.last_name=this.UserForm.value.last_name
  //   this.userservice.postUser(this.clinicObject).subscribe((res)=>{
  //     console.log(res)
  //     this.getData();
  //   })

  // }

  // saveIt(){
  //  console.log(this.UserForm.value)
  // }
  // EditData(data:any){
  //   this.clinicObject.id=data.id
  //   this.UserForm.controls['email'].setValue(data.email)
  //   this.UserForm.controls['avatar'].setValue(data.avatar)
  //   this.UserForm.controls['first_name'].setValue(data.first_name)
  //   this.UserForm.controls['last_name'].setValue(data.last_name)


  // }
  // UpdateData(){

  //   this.clinicObject.avatar=this.UserForm.value.avatar
  //   this.clinicObject.email=this.UserForm.value.email
  //   this.clinicObject.first_name=this.UserForm.value.first_name
  //   this.clinicObject.last_name=this.UserForm.value.last_name
  //   this.userservice.updateUser(this.clinicObject,this.clinicObject.id).subscribe((res:any)=>{
  //     alert("data got updated")
  //     this.getData()
  //   })
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
openAddEditEmpForm(){
 const dialogRef =this._dialog.open(EmpaddeditcomponentComponent)
 dialogRef.afterClosed().subscribe({
  next:(val:any)=>{
    console.log(val)
  if(val){
    this.getUser();
  }
  },
 })
}
deleteUser(id:number){
  console.log(id)
  this.userService.deleteUser(id).subscribe(
    {
      next:(val:any)=>{
        console.log(val)
        console.log(val.data)
    alert('Employee Deleted Successfully')
     this.getUser();
      },
      error:(err:any)=>{
        console.error(err)
      }
    }
  )
}
getUser(){
this.userService.getUser().subscribe(
  {
    next:(val:any)=>{
    console.log(val)
    this.dataSource=new MatTableDataSource(val.data);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

    },
    error:(err:any)=>{
      console.error(err)
    }
  }
)
}

openEditForm(data:any){
  console.log(data)
  const dialogRef =this._dialog.open(EmpaddeditcomponentComponent,{data,})
 dialogRef.afterClosed().subscribe({
  next:(val:any)=>{
  if(val){
    this.getUser();
  }
  },
 })

 }

}
