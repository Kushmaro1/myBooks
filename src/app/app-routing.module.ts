import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component'
import {DetailsComponent} from './details/details.component'

const routes: Routes = [{
path: '',
redirectTo : '/login',
pathMatch: 'full'},
{
path: 'login',
component : LoginComponent
},
{
  path: 'main',
  component : MainComponent
  },
  {
    path: 'fav',
    component : DetailsComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
