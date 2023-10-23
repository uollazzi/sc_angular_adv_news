import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { loggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: "news", component: NewsComponent, canActivate: [loggedGuard] },
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
