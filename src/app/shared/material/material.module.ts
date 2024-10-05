import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

const MATERIAL_MODULES = [
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
]

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule {
}
