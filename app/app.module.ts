import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },
    
  ])],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
