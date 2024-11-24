import FlightOrders from './booking/flight_orders';
import FlightOrder from './booking/flight_order';
import HotelBookings from './booking/hotel_bookings';
import HotelOrders from './booking/hotel_orders';

/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightOrders} flightOrders
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @property {HotelOrders} hotelOrders
 * @protected
 */
class Booking {
  constructor(client) {
    this.client    = client;
    this.flightOrders = new FlightOrders(client);
    this.hotelBookings = new HotelBookings(client);
    this.hotelOrders = new HotelOrders(client);
  }

  flightOrder (orderId) {
    return new FlightOrder(this.client, orderId);
  }
}

export default Booking;