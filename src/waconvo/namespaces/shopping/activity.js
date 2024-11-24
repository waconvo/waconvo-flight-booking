/**
 * A namespaced client for the
 * `/v1/shopping/activities/{activityId}` endpoints
 *
 * Access via the {@link WAConvo} object
 *
 * ```js
 * let waconvo = new WAConvo();
 * waconvo.shopping.activity
 * ```
 *
 * @param {Client} client
 */
class Activity {
  constructor(client, activityId) {
    this.client = client;
    this.activityId = activityId;
  }

  /**
   * Retieve information of an activity by its Id.
   *
   * What is the activity information with Id 3216547684?
   * ```js
   * waconvo.shopping.activity('3216547684').get();
   * ```
   */
  get() {
    return this.client.get(`/v1/shopping/activities/${this.activityId}`);
  }
}

export default Activity;
