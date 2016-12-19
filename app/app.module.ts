import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component'
import { TabMenuComponent } from './tab-menu.component'

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }

    ])],
  declarations: [AppComponent, LoginComponent, HomeComponent, TabMenuComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AuthService],
})
export class AppModule { }
