import DirectDestinations from './airport/direct-destinations';
import Predictions    from './airport/predictions';

/**
 * A namespaced client for the
 * `/v1/airport` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */
class Airport {
  constructor(client) {
    this.client             = client;
    this.directDestinations = new DirectDestinations(client);
    this.predictions = new Predictions(client);
  }
}

export default Airport;