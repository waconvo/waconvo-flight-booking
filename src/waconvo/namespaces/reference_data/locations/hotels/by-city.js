/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-city` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.referenceData.locations.hotels.byCity;
 * ```
 *
 * @param {Client} client
 */
class byCity {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.cityCode City IATA code
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find list of hotels in Barcelona
   *
   * ```js
   * waconvo.referenceData.locations.hotels.byCity.get({
   *   cityCode: 'BCN'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v1/reference-data/locations/hotels/by-city', params);
  }
}

export default byCity;