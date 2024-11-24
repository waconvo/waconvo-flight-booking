/**
 * A namespaced client for the
 * `/v2/media/files` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.media.files;
 * ```
 *
 * @param {Client} client
 */
class Files {
  constructor(client) {
    this.client = client;
  }
}

export default Files;
