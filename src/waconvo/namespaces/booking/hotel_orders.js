/**
 * A namespaced client for the
 * `/v2/booking/hotel-orders` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.booking.hotelOrders;
 * ```
 *
 * @param {Client} client
 */
class HotelOrders {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Search API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests, travel agents and payment info
   *
   * ```js
   * waconvo.booking.hotelOrders.post(
   * {
   * 'data': {
   *     'type': 'hotel-order',
   *     'guests': [],
   *     'travelAgent': {},
   *     'roomAssociations': [],
   *     'payment': {}
   *   }
   * })
   * ```

   */
  post(params = {}) {
    return this.client.post('/v2/booking/hotel-orders', params);
  }
}

export default HotelOrders;