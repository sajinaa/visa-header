import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NavlineComponent } from './header//navline/navline.component';
import { SubmenuComponent } from './header/submenu/submenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavlineComponent,
    SubmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
