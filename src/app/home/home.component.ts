import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
        {{taskTitle}}
    </p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    taskTitle = 'This Is Home Component'

}
