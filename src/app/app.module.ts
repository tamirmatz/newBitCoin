import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    PetAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactsPageComponent,
    ContactDetailsComponent,
    StatisticPageComponent,
    ContactFilterComponent,
    ContactEditPageComponent,
    SignUpComponent,
    MoveListComponent,
    TransferFundComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
