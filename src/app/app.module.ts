import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SpecialEventsComponent } from './special-events/special-events.component';
import {AuthService} from './auth.service';
import {EventService} from './event.service';
import { AddflightComponent } from './addflight/addflight.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { ViewBookingsComponent } from './view-booking/view-booking.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    AddflightComponent,
    RemoveFlightComponent,
    ViewBookingsComponent,
    DashboardComponent,
    UpdateComponent,
    HomeComponent,
    SearchComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
