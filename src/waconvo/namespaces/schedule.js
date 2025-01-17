import Flights from './schedule/flights';

/**
 * A namespaced client for the
 * `/v2/schedule` endpoints
 *
 * Access via the {WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.schedule.flights;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
class Schedule {
  constructor(client) {
    this.client = client;
    this.flights = new Flights(client);
  }
}

export default Schedule;
