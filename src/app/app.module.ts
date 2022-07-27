import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './pages/error404/error404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncomePage } from './pages/income/income.component';
import { OutcomePage } from './pages/outcome/outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    DashboardComponent,
    IncomePage,
    OutcomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
