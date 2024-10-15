import {NgModule} from "@angular/core";
import {AddPageComponent, PreviewPageComponent} from "./pages";
import {PhoneListPipe, TotalPipe} from "./pipes";
import {ProductService} from "./services";
import {SharedModule} from "../../shared";
import {InvoiceRoutingModule} from "./invoice-routing.module";

const MODULES = [
  SharedModule,
  InvoiceRoutingModule
]

const COMPONENTS = [
  AddPageComponent,
  PreviewPageComponent,
];

const PIPES = [
  PhoneListPipe,
  TotalPipe
]

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    MODULES
  ],
  providers: [ProductService]
})
export class InvoiceModule {
}
