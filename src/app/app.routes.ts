import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {IntroductionComponent} from "./introduction/introduction.component";
import {ComponentsComponent} from "./components/components.component";
import {RoutingsComponent} from "./routings/routings.component";

export const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'routings', component: RoutingsComponent }
];
