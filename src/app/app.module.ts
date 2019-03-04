import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {TaskComponent} from './task/task.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TaskComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
