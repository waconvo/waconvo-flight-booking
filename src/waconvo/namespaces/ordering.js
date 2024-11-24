import TransferOrders from './ordering/transfer_orders';
import TransferOrder from './ordering/transfer_order';

/**
 * A namespaced client for the
 * `/v1/ordering` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.ordering;
 * ```
 *
 * @param {Client} client
 * @property {TransferOrders} transferOrders
 * @property {TransferOrder} transferOrder
 */
class Ordering {
  constructor(client) {
    this.client = client;
    this.transferOrders = new TransferOrders(client);
    this.transferOrder = (orderId) => new TransferOrder(client, orderId);
  }
}

export default Ordering;