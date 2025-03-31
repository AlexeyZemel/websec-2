import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {RoutesComponent} from "./pages/routes/routes.component";

export const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "routes", component: RoutesComponent }
];
