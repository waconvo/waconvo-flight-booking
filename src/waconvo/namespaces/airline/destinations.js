/**
 * A namespaced client for the
 * `/v1/airline/destinations` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.airline.destinations;
 * ```
 *
 * @param {Client} client
 */
class Destinations {
  constructor(client) {
    this.client = client;
  }

  /**
     * find all destinations served by a given airline
     *
     * @param {Object} params
     * @param {string} params.airlineCode airline IATA code, e.g. BA for British airways
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     *  What destinations are served by this airline?
     *  ```js
     * waconvo.airline.destinations.get({
     *   airlineCode: 'BA',
     * })
     * ```
     */
  get(params = {}) {
    return this.client.get('/v1/airline/destinations', params);
  }
}

export default Destinations;