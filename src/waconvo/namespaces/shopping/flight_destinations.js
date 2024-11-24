/**
 * A namespaced client for the
 * `/v1/shopping/flight-destinations` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.flightDestinations;
 * ```
 *
 * @param {Client} client
 */
class FlightDestinations {
  constructor(client) {
    this.client = client;
  }

  /**
   * Find the cheapest destinations where you can fly to.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest destination from Madrid
   *
   * ```js
   * waconvo.shopping.flightDestinations.get({
   *   origin: 'MAD'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/shopping/flight-destinations', params);
  }
}

export default FlightDestinations;
