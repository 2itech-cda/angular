import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHelloComponent } from './hello.component';
import { TextcounterComponent } from './textcounter/textcounter.component';
import { CommentsComponent } from './comments/comments.component';
import { ToggleboxComponent } from './togglebox/togglebox.component';
import { SliderComponent } from './slider/slider.component';
import { PaletteComponent } from './palette/palette.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHelloComponent,
    TextcounterComponent,
    CommentsComponent,
    ToggleboxComponent,
    SliderComponent,
    PaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
