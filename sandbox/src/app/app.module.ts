import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHelloComponent } from './hello.component';
import { TextcounterComponent } from './textcounter/textcounter.component';
import { CommentsComponent } from './comments/comments.component';
import { ToggleboxComponent } from './togglebox/togglebox.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHelloComponent,
    TextcounterComponent,
    CommentsComponent,
    ToggleboxComponent
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
