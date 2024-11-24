import Analytics from './travel/analytics';
import Predictions from './travel/predictions';

/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` & `/v3/travel` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.travel;
 * ```
 *
 * @param {Client} client
 * @property {Analytics} analytics
 * @property {Predictions} predictions
 * @protected
 */
class Travel {
  constructor(client) {
    this.client    = client;
    this.analytics = new Analytics(client);
    this.predictions = new Predictions(client);
  }
}

export default Travel;
