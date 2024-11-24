import HotelSentiments    from './e_reputation/hotel_sentiments';

/**
 * A namespaced client for the
 * `/v2/e-reputation` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.eReputation;
 * ```
 *
 * @param {Client} client
 * @property {hotelSentiments} hotel_sentiments
 */
class EReputation {
  constructor(client) {
    this.client             = client;
    this.hotelSentiments = new HotelSentiments(client);
  }
}

export default EReputation;
