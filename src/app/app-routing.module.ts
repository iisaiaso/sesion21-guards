import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guard/permissions.guard';
import { SavedGuard } from './guard/saved.guard';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[PermissionsGuard]},
  {path:'post', component:PostComponent},
  {path:'formulario', component:FormComponent, canActivate:[PermissionsGuard], canDeactivate:[SavedGuard]},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
