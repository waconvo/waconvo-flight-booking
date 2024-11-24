import ItineraryPriceMetrics from './analytics/itinerary_price_metrics';

/**
 * A namespaced client for the
 * `/v1/analytics` endpoints
 *
 * Access via the {WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
class Analytics {
  constructor(client) {
    this.client = client;
    this.itineraryPriceMetrics = new ItineraryPriceMetrics(client);
  }
}

export default Analytics;
