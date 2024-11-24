import Transfers from './transfer_orders/transfers';

/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.ordering.transferOrder('XXX');
 * ```
 *
 * @param {Client} client
 * @param {string} orderId
 */
class TransferOrder {
  constructor(client, orderId) {
    this.client = client;
    this.orderId = orderId;
    this.transfers = new Transfers(client, orderId);
  }
}

export default TransferOrder;