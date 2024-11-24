import Cancellation from './transfers/cancellation';

/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX/transfers` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.ordering.transferOrders('XXX').transfers;
 * ```
 *
 * @param {Client} client
 */
class Transfers {
  constructor(client, orderId) {
    this.client = client;
    this.orderId = orderId;
    this.cancellation = new Cancellation(client, orderId);
  }
}

export default Transfers;