import AirTraffic  from './analytics/air_traffic';

/**
 * A namespaced client for the
 * `/v2/travel/analytics` endpoints
 *
 * Access via the {WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.travel.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
class Analytics {
  constructor(client) {
    this.client        = client;
    this.airTraffic    = new AirTraffic(client);
  }
}

export default Analytics;
