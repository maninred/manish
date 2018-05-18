import { Injectable } from '@angular/core';
import { Details} from "../app/details.model";

@Injectable()
export class BackEndServiceService {
  
  details: Details[];

  constructor() {
    this.details=[{ name: "Manish", age: 25, about :"Currently working at Microsoft"},
    { name: "Haneesh", age: 23, about :"Currently working at FaceBook"},
    {name: "Naresh", age: 24, about :"Currently working at Visa"},
    { name: "Prasanth", age: 26, about :"Currently working at TradeWeb"}];
   }

   getDetails(): Details[] {
     return this.details;
   }

}
