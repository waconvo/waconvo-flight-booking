/**
 * A namespaced client for the
 * `/v1/booking/hotel-bookings` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.booking.hotelBookings;
 * ```
 *
 * @param {Client} client
 */
class HotelBookings {
  constructor(client) {
    this.client = client;
  }

  /**
   * To book the offer retrieved from Hotel Shopping API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests & payments info
   *
   * ```js
   * waconvo.booking.hotelBookings.post(
   * {
   * 'data': {
   *   'offerId': 'XXXX',
   *   'guests': [],
   *   'payments': [],
   *   'rooms': []
   * }}
   * )
   * ```
   */
  post(params = {}) {
    return this.client.post('/v1/booking/hotel-bookings', params);
  }
}

export default HotelBookings;