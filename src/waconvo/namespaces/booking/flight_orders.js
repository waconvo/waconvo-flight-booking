/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.booking.flightOrders;
 * ```
 *
 * @param {Client} client
 */
class FlightOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the selected flight-offer and create a flight-order
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the flight-offer(s) suggested by flightOffersSearch and create a flight-order
   *
   * ```js
   * waconvo.booking.flightOrders.post({
   *  'type': 'flight-order',
   *  'flightOffers': [],
   *  'travelers': []
   * });
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/booking/flight-orders', params);
  }
}

export default FlightOrders;