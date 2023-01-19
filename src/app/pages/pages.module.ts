import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FormComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    FormComponent,
    PostComponent
  ]
})
export class PagesModule { }
