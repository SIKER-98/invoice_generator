import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddPageComponent, PreviewPageComponent} from "./pages";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {MaterialModule} from "./shared/material/material.module";

const COMPONENTS = [
  AddPageComponent,
  PreviewPageComponent,
  AppComponent,
  ToolbarComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
