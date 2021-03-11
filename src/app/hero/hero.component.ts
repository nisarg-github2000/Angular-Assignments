import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  welcomeMessage : string = "Hello from hero component";
  border: string;

  constructor(private myService:MyServiceService) {
  }
  
  onClick(message: string){
    this.myService.ChangeMessage(message);
    this.border = '2px solid cornflowerblue'
  }

  ngOnInit(): void {
    
  }

}
