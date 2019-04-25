import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent },
  {path: "mentor/:id", component: ShowComponent},
  {path: "mentor/new", component: CreateComponent},
  {path: "chat", component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
