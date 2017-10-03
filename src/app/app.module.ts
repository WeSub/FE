import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaItemComponent } from './persona-item/persona-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarouselComponent,
    PersonaListComponent,
    PersonaItemComponent,
    NavbarComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
