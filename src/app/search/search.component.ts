import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public data:any={}
  public datas:any=[]


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  getflightdata(){
    console.log(this.data)
    this.auth.getflightdata(this.data).subscribe((res:any)=>{
      console.log(res)
      this.datas=res

    })

  }
}
