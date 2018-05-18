import { Injectable } from '@angular/core';
import { Details} from "../app/details.model";

@Injectable()
export class BackEndServiceService {
  
  details: Details[];

  constructor() {
    this.details=[{ name: "Manish", age: 25, about :"Microsoft"},
    { name: "Haneesh", age: 23, about :"FaceBook"},
    {name: "Naresh", age: 24, about :"Visa"},
    { name: "Prasanth", age: 26, about :"TradeWeb"}];
   }

   getDetails(): Details[] {
     return this.details;
   }

}
