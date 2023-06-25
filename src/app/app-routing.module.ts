import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddflightComponent } from './addflight/addflight.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { ViewBookingsComponent } from './view-booking/view-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  {path:'events',component:EventsComponent},
  {path:'special-events',component:SpecialEventsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'remove-flight',component:RemoveFlightComponent},
  {path:'view-booking',component:ViewBookingsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'update',component:UpdateComponent},
  {path:'home',component:HomeComponent},
  {path:'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
