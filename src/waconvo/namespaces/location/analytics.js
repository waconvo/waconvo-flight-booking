import CategoryRatedAreas    from './analytics/category_rated_areas';

/**
 * A namespaced client for the
 * `/v1/location/analytics` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} CategoryRatedAreas
 */
class Analytics {
  constructor(client) {
    this.client = client;
    this.categoryRatedAreas = new CategoryRatedAreas(client);
  }
}

export default Analytics;