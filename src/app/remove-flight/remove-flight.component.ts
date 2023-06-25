
import { Component } from '@angular/core';

@Component({
  selector: 'app-remove-flight',
  templateUrl: 'remove-flight.component.html',
  styleUrls: ['remove-flight.component.css']
})
export class RemoveFlightComponent {
  flightNumber: any;
  
  removeFlight() {
    // Validate flight details
    // Create an API request to remove the flight from the backend
  }

  addFlight(){}
}

