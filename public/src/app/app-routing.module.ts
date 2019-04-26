import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent },
  {path: "mentor/:id", component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
