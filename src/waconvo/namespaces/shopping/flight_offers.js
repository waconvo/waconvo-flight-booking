import FlightChoicePrediction from './flight_offers/flight_choice_prediction.js';
import Pricing from './flight_offers/pricing.js';
import Upselling from './flight_offers/upselling.js';

/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
class FlightOffers {
  constructor(client) {
    this.client = client;
    this.prediction = new FlightChoicePrediction(client);
    this.pricing = new Pricing(client);
    this.upselling = new Upselling(client);
  }
}

export default FlightOffers;
