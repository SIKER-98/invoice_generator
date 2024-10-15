import {RouterModule, Routes} from "@angular/router";
import {AddPageComponent, PreviewPageComponent} from "./pages";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AddPageComponent
  },
  {
    path: 'preview',
    component: PreviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {
}
