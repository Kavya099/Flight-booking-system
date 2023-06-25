import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: 'view-booking.component.html',
  styleUrls: ['view-booking.component.css']
})
export class ViewBookingsComponent implements OnInit {
  public data:any={}
  public datas:any=[]


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  getdata(){
    console.log(this.data)
    this.auth.getdata(this.data).subscribe((res:any)=>{
      console.log(res)
      this.datas=res

    })

  }
}