import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryOnGardenComponent } from './try-on-garden/try-on-garden.component';
import { CanvasViewportComponent } from './canvas-viewport/canvas-viewport.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch: 'full'},
  {path:'view-port',component:CanvasViewportComponent},
  {path:'garden-proto',component:TryOnGardenComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
