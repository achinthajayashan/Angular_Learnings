import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ng-classes',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    NgForOf
  ],
  // template: `
  //   <p>
  //     ng-class works!
  //   </p>
  // `,
  templateUrl: './ng-classes.component.html',
  styleUrl: './ng-classes.component.css'
})
export class NgClassesComponent {
 age= 15;

 isActive=false;

 getDynamicClass(){
   return this.isActive ? 'active' : 'inactive';
 }

 title=''

  // ng if

  condition =true;

 qtyOfitem=12;

 data=[
   {name:"apple" ,color:"green" },
   {name:"orange" ,color:"orange" },
   {name:"banana" ,color:"yellow" },
   {name:"pineapple" ,color:"yellow" },
   {name:"mango" ,color:"green" },
   {name:"grapes" ,color:"purple" }
 ];
}
