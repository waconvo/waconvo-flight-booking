/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/pricing` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.flightOffers.pricing;
 * ```
 *
 * @param {Client} client
 */
class Pricing {
  constructor(client) {
    this.client = client;
  }

  /**
   * To get or confirm the price of a flight and obtain information
   * about taxes and fees to be applied to the entire journey. It also
   * retrieves ancillary information (e.g. additional bag or extra legroom
   * seats pricing) and the payment information details requested at booking time.
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {string} params.data.type 'flight-offers-pricing' for Flight Offer Pricing
   * @param {Array} params.data.flightOffers list of flight offers for which the
   * pricing needs to be retrieved
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * waconvo.shopping.flightOffers.pricing.post({
   *  'data': {
   *      'type': 'flight-offers-pricing',
   *      'flightOffers': []
   *  }
   * });
   * ```
   */
  post(params = {}, additionalParams = {}) {
    // Convert additionalParams object to query string
    const queryString = Object.keys(additionalParams).map(key => key + '=' + additionalParams[key]).join('&');

    // Check if queryString is empty before appending it to the URL
    let url = '/v1/shopping/flight-offers/pricing';
    if (queryString !== '') {
      url += '?' + queryString;
    }

    return this.client.post(url, params);
  }
}

export default Pricing;