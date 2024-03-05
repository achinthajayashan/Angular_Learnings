import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './app.component.html',
  template: `
      <main>
          <header class="headerSec">
              <h1>This is Header</h1>
          </header>
          <section class="content">
              <app-home></app-home>
          </section>
      </main>
  `,
  // styleUrl: './app.component.css',
  styles:`
  .headerSec{
   background-color: black;
   width: 100vw;
   height: 7vh;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
  }
  `
})
export class AppComponent {
  title = 'angular-learnings';
}
