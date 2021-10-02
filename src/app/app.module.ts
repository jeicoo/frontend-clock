import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerclockComponent } from './serverclock/serverclock.component';
import { ManilaclockComponent } from './manilaclock/manilaclock.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerclockComponent,
    ManilaclockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
