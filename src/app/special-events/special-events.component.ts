import { Component,OnInit } from '@angular/core';
import {EventService} from '../event.service';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit{

  specialEvents :any= []
  constructor(private _eventService: EventService){}

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
    .subscribe(

      res => this.specialEvents = res,
      err => console.log(err)
    )
  }
}


  interface Flight {
    id: string;
    date: string;
    time: string;
    seatsAvailable: number;
  }
  
  interface Booking {
    userId: string;
    flightId: string;
  }
  
  class FlightBookingSystem {
    private flights: Flight[] = [];
    private bookings: Booking[] = [];
    private currentUser: string | null = null;
  
    public login(userId: string): void {
      this.currentUser = userId;
      console.log(`User ${userId} logged in.`);
    }
  
    public signup(userId: string): void {
      // Perform data validations here
      console.log(`User ${userId} signed up.`);
    }
  
    public searchFlights(date: string, time: string): Flight[] {
      // Perform search logic based on date and time
      // Return a list of flights matching the search criteria
      return this.flights.filter(flight => flight.date === date && flight.time === time);
    }
  
    public bookFlight(flightId: string): void {
      const flight = this.flights.find(flight => flight.id === flightId);
      if (!flight) {
        console.log(`Flight ${flightId} not found.`);
        return;
      }
  
      if (flight.seatsAvailable <= 0) {
        console.log(`No seats available on Flight ${flightId}.`);
        return;
      }
  
      const booking: Booking = {
        userId: this.currentUser!,
        flightId: flightId
      };
      this.bookings.push(booking);
      flight.seatsAvailable--;
      console.log(`Flight ${flightId} booked for User ${this.currentUser}.`);
    }
  
    public getBookings(): Booking[] {
      return this.bookings.filter(booking => booking.userId === this.currentUser);
    }
  
    public logout(): void {
      this.currentUser = null;
      console.log("User logged out.");
    }
  }
  
  // Usage example
  
  const bookingSystem = new FlightBookingSystem();
  
  function displayContent(content: string): void {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.innerHTML = content;
    }
  }
  
  function login(userId: string): void {
    bookingSystem.login(userId);
    displayContent(`
      <h2>Welcome, ${userId}!</h2>
      <button onclick="logout()">Logout</button>
      <form onsubmit="searchFlights(event)">
        <label>Date:</label>
        <input type="text" id="date" required>
        <label>Time:</label>
        <input type="text" id="time" required>
        <button type="submit">Search Flights</button>
      </form>
      <div id="bookings"></div>
    `);
  }
  
  function signup(userId: string): void {
    bookingSystem.signup(userId);
    displayContent(`
      <h2>Signup successful, ${userId}!</h2>
      <button onclick="logout()">Logout</button>
    `);
  }
  
  function searchFlights(event: Event): void {
    event.preventDefault();
    const dateInput = document.getElementById("date") as HTMLInputElement;
    const timeInput = document.getElementById("time") as HTMLInputElement;
  
    if (!dateInput || !timeInput) {
      console.log("Invalid input fields.");
      return;
    }
  
    const flights = bookingSystem.searchFlights(dateInput.value, timeInput.value);
  
    let content = "";
    if (flights.length === 0) {
      content = "<p>No flights found.</p>";
    } else {
      content = "<h3>Flights:</h3>";
      flights.forEach(flight => {
        content += `
          <p>
            Flight ID: ${flight.id}<br>
            Date: ${flight.date}<br>
            Time: ${flight.time}<br>
            Seats Available: ${flight.seatsAvailable}
          </p>
          <button onclick="bookFlight('${flight.id}')">Book Flight</button>
        `;
      });
    }
  
    displayContent(content);
  }
  
  function bookFlight(flightId: string): void {
    bookingSystem.bookFlight(flightId);
    displayContent(`
      <h2>Flight booked successfully!</h2>
      <button onclick="showBookings()">My Bookings</button>
      <button onclick="logout()">Logout</button>
    `);
  }
  
  function showBookings(): void {
    const bookings = bookingSystem.getBookings();
  
    let content = "";
    if (bookings.length === 0) {
      content = "<p>No bookings found.</p>";
    } else {
      content = "<h3>My Bookings:</h3>";
      bookings.forEach(booking => {
        content += `
          <p>
            User ID: ${booking.userId}<br>
            Flight ID: ${booking.flightId}
          </p>
        `;
      });
    }
  
    const bookingsElement = document.getElementById("bookings");
    if (bookingsElement) {
      bookingsElement.innerHTML = content;
    }
  }
  
  function logout(): void {
    bookingSystem.logout();
    displayContent(`
      <h2>You have been logged out.</h2>
      <button onclick="loginPrompt()">Login</button>
      <button onclick="signupPrompt()">Sign Up</button>
    `);
  }
  
  function loginPrompt(): void {
    displayContent(`
      <h2>Login</h2>
      <form onsubmit="login(event)">
        <label>User ID:</label>
        <input type="text" id="userId" required>
        <button type="submit">Login</button>
      </form>
    `);
  }
  
  function signupPrompt(): void {
    displayContent(`
      <h2>Sign Up</h2>
      <form onsubmit="signup(event)">
        <label>User ID:</label>
        <input type="text" id="userId" required>
        <button type="submit">Sign Up</button>
      </form>
    `);
  }
  
  // Initial prompt
  loginPrompt();
  


