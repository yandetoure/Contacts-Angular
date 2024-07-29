import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact-list', component: ContactListComponent },
    { path: 'contact-form/:id', component: ContactFormComponent },
    { path: 'contact-detail/:id', component: ContactDetailComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ajouter FormsModule ici
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
