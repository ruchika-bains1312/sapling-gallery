import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryOnGardenComponent } from './try-on-garden/try-on-garden.component';
import { CanvasViewportComponent } from './canvas-viewport/canvas-viewport.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'view-port',component:CanvasViewportComponent},
  {path:'garden-proto',component:TryOnGardenComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
