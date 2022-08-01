import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Error404Component } from './pages/error404/error404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncomePage } from './pages/income/income.component';
import { OutcomePage } from './pages/outcome/outcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTransactionModalComponent } from './components/add-transaction-modal/add-transaction-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MY_DATE_FORMATS } from './configs/date-format';
import { MatRadioModule } from '@angular/material/radio';
import { BinaryRadioComponent } from './components/binary-radio/binary-radio.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';


registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    DashboardComponent,
    IncomePage,
    OutcomePage,
    AddTransactionModalComponent,
    BinaryRadioComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
