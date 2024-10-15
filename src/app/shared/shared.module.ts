import {MaterialModule} from "./material/material.module";
import {NgModule} from "@angular/core";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const COMPONENTS = [
  ToolbarComponent
]

const MODULES = [
  MaterialModule,
  ReactiveFormsModule,
  CommonModule,
]

@NgModule({
  imports: [
    MODULES,
    RouterLink,
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    MODULES,
    COMPONENTS
  ],

})
export class SharedModule {
}
