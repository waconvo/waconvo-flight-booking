/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/upselling` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.flightOffers.upselling;
 * ```
 *
 * @param {Client} client
 */
class Upselling {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * waconvo.shopping.flightOffers.upselling.post(body);
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/shopping/flight-offers/upselling', params);
  }
}

export default Upselling;