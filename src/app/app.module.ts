import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { CanvasViewportComponent } from './canvas-viewport/canvas-viewport.component';
import { TryOnGardenComponent } from './try-on-garden/try-on-garden.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ProductTileComponent,
    CanvasViewportComponent,
    TryOnGardenComponent,
    HomeCarouselComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
