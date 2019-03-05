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
import { SearchComponent } from './search/search.component';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TaskComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'meetings', component: MeetingsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    SearchComponent,
    ClientsComponent,
    MeetingsComponent
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
