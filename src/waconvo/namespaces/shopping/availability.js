import FlightAvailabilities from './availability/flight_availabilities';

/**
 * A namespaced client for the
 * `/v1/shopping/availability` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.availability;
 * ```
 *
 * @param {Client} client
 * @property {Availability} availability
 * @protected
 */
class Availability {
  constructor(client) {
    this.client = client;
    this.flightAvailabilities = new FlightAvailabilities(client);
  }
}

export default Availability;
