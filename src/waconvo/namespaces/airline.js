import Destinations from './airline/destinations';

/**
 * A namespaced client for the
 * `/v1/airline` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.airline;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */
class Airline {
  constructor(client) {
    this.client = client;
    this.destinations = new Destinations(client);
  }
}

export default Airline;