import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { kapcsolatComponent } from "./kapcsolat/kapcsolat.component";
import { cicakComponent } from "./cicak/cicak.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "kapcsolat", component: kapcsolatComponent },
  { path: "cicak", component: cicakComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
