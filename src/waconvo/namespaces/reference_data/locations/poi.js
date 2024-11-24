/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.referenceData.locations.pointOfInterest;
 * ```
 *
 * @param {Client} client
 */
class PointOfInterest {
  constructor(client, poiId) {
    this.client = client;
    this._poiId = poiId;
  }

  /**
   * Extracts the information about point of interest with given ID
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * waconvo.referenceData.locations.pointOfInterest('9CB40CB5D0').get();
   * ```
   */
  get() {
    return this.client.get(`/v1/reference-data/locations/pois/${this._poiId}`);
  }
}

export default PointOfInterest;
