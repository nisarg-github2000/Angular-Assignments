import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private messageSource=new BehaviorSubject('default message');
  currentMessage=this.messageSource.asObservable();
  constructor() { }
  ChangeMessage(message:any){
    this.messageSource.next(message);
  }
}
