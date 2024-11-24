
/**
 * A namespaced client for the
 * `/v1/shopping/transfer-offers` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.transferOffers;
 * ```
 *
 * @param {Client} client
 */
class TransferOffers {
  constructor(client) {
    this.client = client;
  }

  /**
   * To search the list of transfer offers.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To search the list of transfer offers
   *
   * ```js
   * waconvo.shopping.transferOffers.post(body)

   * ```
  */
  post(params = {}) {
    return this.client.post('/v1/shopping/transfer-offers', params);
  }
}

export default TransferOffers;