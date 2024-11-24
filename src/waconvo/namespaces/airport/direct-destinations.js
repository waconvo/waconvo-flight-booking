/**
 * A namespaced client for the
 * `/v1/airport/direct-destinations` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.airport.directDestinations;
 * ```
 *
 * @param {Client} client
 */
class DirectDestinations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.departureAirportCode airport IATA code, e.g. BOS for Boston
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What destinations are served by this airport?
   *  ```js
   * waconvo.airport.directDestinations.get({
   *   departureAirportCode: 'JFK',
   * })
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/airport/direct-destinations', params);
  }
}

export default DirectDestinations;