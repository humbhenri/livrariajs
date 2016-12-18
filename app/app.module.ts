import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      
    ])],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AuthService],
})
export class AppModule { }
