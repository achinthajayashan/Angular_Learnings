import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
        {{taskTitle}}
    </p>

    <button (click)="updateTitle('Button Clicked')" id="btn1">Change Title</button>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    //behavior
    taskTitle = 'This Is Home Component';
    isTitleChanged= false;

    // behaviors
    updateTitle(newTitle: string){
      this.taskTitle = newTitle
      this.isTitleChanged=true;
    }

}
