import { Component,OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  
  userForm: FormGroup;
  public listData: any={}
  alert:boolean=false
  public data:any={}
  public gri:any=[]



  constructor(private fb:FormBuilder, private auth:AuthService) {

    this.listData=[]


    this.userForm = this.fb.group ({
      flightnumber : ['', Validators.required],
      depaturetime: ['', Validators.required],
      arrivaltime : ['', Validators.required],

    })
  }


  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
   }

   reset()
   {
    this.userForm.reset();
   }

   removeitem(element:any){
    this.listData.forEach((value:any,index:any)=>{
      if(value == element)
      this.listData.splice(index,1);
    })
   }
  ngOnInit(): void {
  }

  grid(){
    console.log(this.listData)
    this.auth.grid(this.listData).subscribe((res:any)=>{
      this.gri=res
      console.log(this.gri)
      alert('Flight add successfully');
      
    })

  }
  
}

  

  





