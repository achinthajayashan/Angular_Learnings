import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>
      about works!
    </p>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
