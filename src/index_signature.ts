class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Endang";
seats.A2 = "Aldeind";

// static
class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
