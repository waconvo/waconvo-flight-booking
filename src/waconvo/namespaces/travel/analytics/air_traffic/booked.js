/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/booked` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.travel.analytics.AirTraffic.Booked;
 * ```
 *
 * @param {Client} client
 */
class Booked{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports based on the number of bookings.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Where were people flying to from Madrid in the August 2017?
   *
   * ```js
   * waconvo.travel.analytics.AirTraffic.Booked.get({
   *   originCityCode: 'MAD',
   *   period: '2017-08'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/booked', params);
  }
}

export default Booked;
