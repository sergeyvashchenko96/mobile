import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {TaskComponent} from './task/task.component';
import {HeaderComponent} from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TaskComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
