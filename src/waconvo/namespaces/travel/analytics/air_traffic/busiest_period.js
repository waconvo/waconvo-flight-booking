/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/busiest-period` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.travel.analytics.AirTraffic.BusiestPeriod;
 * ```
 *
 * @param {Client} client
 */
class BusiestPeriod{
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of air traffic reports.
   *
   * @param {Object} params
   * @param {string} params.cityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.direction to select between arrivals and departures (default: arrivals)
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What were the busiest months for Madrid in 2017?
   *
   * ```js
   * waconvo.travel.analytics.AirTraffic.BusiestPeriod.get({
   *   cityCode: 'MAD',
   *   period: '2017',
   *   direction: WAConvo.direction.arriving
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/travel/analytics/air-traffic/busiest-period', params);
  }
}

export default BusiestPeriod;
