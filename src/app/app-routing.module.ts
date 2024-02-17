import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'start-page', component:StartPageComponent},
  {path:'main', component:MainComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'', redirectTo:'start-page', pathMatch:'full'},
  {path:'**', redirectTo:'not-found', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
