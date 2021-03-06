import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventHeaderComponent } from './event-header/event-header.component';
import { EventFooterComponent } from './event-footer/event-footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { EventsShopComponent } from './events-shop/events-shop.component';
import { ContactComponent } from './contact/contact.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EventHeaderComponent,
    EventFooterComponent,
    NavComponent,
    EventsShopComponent,
    ContactComponent,
    LoginRegistrationComponent,
    DashboardProviderComponent,
    DashboardUserComponent
  ],
  imports: [
    BrowserAnimationsModule,        
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
