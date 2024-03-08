import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `
    <p>
        {{taskTitle}}
    </p>

    <button (click)="updateTitle('Button Clicked')" id="btn1">Change Title</button>

    <p routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">Go To About</p>

    <router-outlet></router-outlet>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    //behaviors
    taskTitle = 'This Is Home Component';
    isTitleChanged= false;




    // behaviors
    updateTitle(newTitle: string){
      this.taskTitle = newTitle
      this.isTitleChanged=true;
    }

}
