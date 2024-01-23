import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { FirstComponent } from './first/first.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'First Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  { path: 'main', component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'first', pathMatch: 'full' },
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
