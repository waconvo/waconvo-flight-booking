import CheckinLinks from './urls/checkin_links';

/**
 * A namespaced client for the
 * `/v2/reference-data/urls` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {CheckinLinks} checkin_links
 * @protected
 */
class Urls {
  constructor(client) {
    this.client = client;
    this.checkinLinks = new CheckinLinks(client);
  }
}

export default Urls;
