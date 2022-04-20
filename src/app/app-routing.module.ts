import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebtComponent } from './components/add-debt/add-debt.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "add",
    component: AddDebtComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"

  },
  {
    path: "**",
    pathMatch: "full",
    component: ErrorComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
