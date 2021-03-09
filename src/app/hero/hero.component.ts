import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  message : string = "subscribed data";
  welcomeMessage : string = "Hello from hero component";
  
  constructor(private myService:MyServiceService) {
  }
  
  onClick(){
    this.myService.ChangeMessage(this.message);
  }

  ngOnInit(): void {
    
  }

}
