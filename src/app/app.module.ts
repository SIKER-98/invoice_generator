import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddPageComponent, PreviewPageComponent} from "./pages";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";

const COMPONENTS = [
  AddPageComponent,
  PreviewPageComponent
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
