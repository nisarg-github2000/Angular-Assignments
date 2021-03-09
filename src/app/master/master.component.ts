import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  welcomeMessage : string = "Hello from master component";
  imageUrl : string = "../../assets/cat-solid.svg"
  birthday = new Date(2000, 3, 22);
  constructor(private myService:MyServiceService) {
   }
  
  ngOnInit(): void {
    this.myService.currentMessage.subscribe(data=>{
      console.log(data);
    });
  }

}
