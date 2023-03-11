
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClinicalService } from './clinical.service';

@Component({
  selector: 'app-empaddeditcomponent',
  templateUrl: './empaddeditcomponent.component.html',
  styleUrls: ['./empaddeditcomponent.component.css']
})
export class EmpaddeditcomponentComponent implements OnInit{
empForm:FormGroup
constructor(private _fb:FormBuilder,
  private userService:ClinicalService,
  private dialogref:MatDialogRef<EmpaddeditcomponentComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any
  ){
  this.empForm=this._fb.group({
    id:'',
    first_name:'',
    last_name:'',
    email:'',
    avatar:''
  })

}

ngOnInit(): void {
  this.empForm.patchValue(this.data)
}
onFormSubmit(){
  if(this.empForm.valid){
    if(this.data){
      console.log(this.data)
      console.log(this.data.id)
      this.userService.updateUser(this.data.id,this.empForm.value).subscribe(
        {
          next:(val:any)=>{
            console.log(val)
        alert('Employee Updated Successfully')
        this.dialogref.close(true);
          },
          error:(err:any)=>{
            console.error(err)
          }
        }
      )

    }
    else{
      this.userService.postUser(this.empForm.value).subscribe(
        {
          next:(val:any)=>{
            console.log(val)
        alert('Employee Added Successfully')
        this.dialogref.close(true);
          },
          error:(err:any)=>{
            console.error(err)
          }
        }
      )
    }
    console.log(this.empForm.value)

  }
}
}
