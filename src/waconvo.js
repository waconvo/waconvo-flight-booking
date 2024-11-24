import Client        from './waconvo/client';
import Pagination    from './waconvo/client/pagination';

import ReferenceData from './waconvo/namespaces/reference_data';
import Shopping      from './waconvo/namespaces/shopping';
import Booking       from './waconvo/namespaces/booking';
import Travel        from './waconvo/namespaces/travel';
import EReputation   from './waconvo/namespaces/e_reputation';
import Media         from './waconvo/namespaces/media';
import Ordering      from './waconvo/namespaces/ordering';
import Airport       from './waconvo/namespaces/airport';
import Schedule      from './waconvo/namespaces/schedule';
import Analytics     from './waconvo/namespaces/analytics';
import Location      from './waconvo/namespaces/location';
import Airline       from './waconvo/namespaces/airline';


/**
 * The WAConvo client library for accessing the travel APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var WAConvo = require('waconvo');
 * var waconvo = new WAConvo({
 *     clientId:    'YOUR_CLIENT_ID',
 *     clientSecret: 'YOUR_CLIENT_SECRET'
 * });
 * ```
 *
 * Alternatively, initialize the library using
 * the environment variables `WACONVO_CLIENT_ID`
 * and `WACONVO_CLIENT_SECRET`
 *
 * ```js
 * var waconvo = new WAConvo();
 * ```
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.logLevel='warn'] the log level for the client,
 *  available options are `debug`, `warn`, and `silent`
 * @param {string} [params.hostname='production'] the name of the server API
 *  calls are made to (`production` or `test`)
 * @param {string} [params.host] the full domain or IP for a server to make the
 *  API clal to. Only use this if you don't want to use the provided servers
 * @param {boolean} [params.ssl=true] wether to use SSL for this API call
 * @param {number} [params.port=443] the port to make the API call to
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTP(S)-compatible client
 *  that accepts a 'request()' call with an array of options.
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
class WAConvo {
  constructor(params = {}) {
    this.client = new Client(params);
    this.version = this.client.version;

    this.referenceData  = new ReferenceData(this.client);
    this.shopping       = new Shopping(this.client);
    this.booking        = new Booking(this.client);
    this.travel         = new Travel(this.client);
    this.eReputation    = new EReputation(this.client);
    this.media          = new Media(this.client);
    this.ordering       = new Ordering(this.client);
    this.airport        = new Airport(this.client);
    this.pagination     = new Pagination(this.client);
    this.schedule       = new Schedule(this.client);
    this.analytics      = new Analytics(this.client);
    this.location       = new Location(this.client);
    this.airline        = new Airline(this.client);
  }

  /**
   * The previous page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * waconvo.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return waconvo.previous(response);
   * }).then(function(previousPage){
   *   console.log(previousPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  previous(response) { return this.pagination.page('previous', response); }

  /**
   * The next page for the given response. Resolves to null if the page could
   * not be found.
   *
   * ```js
   * waconvo.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY'
   * }).then(function(response){
   *   console.log(response);
   *   return waconvo.next(response);
   * }).then(function(nextPage){
   *   console.log(nextPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  next(response)     { return this.pagination.page('next', response); }

  /**
   * The first page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * waconvo.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return waconvo.first(response);
   * }).then(function(firstPage){
   *   console.log(firstPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  first(response)    { return this.pagination.page('first', response); }

  /**
   * The last page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * waconvo.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY'
   * }).then(function(response){
   *   console.log(response);
   *   return waconvo.last(response);
   * }).then(function(lastPage){
   *   console.log(lastPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  last(response)     { return this.pagination.page('last', response); }
}


/**
 * A handy list of location types, to be used in the locations API:
 *
 * ```js
 * waconvo.referenceData.location.get({
 *   keyword: 'lon',
 *   subType: WAConvo.location.any
 * });
 * ```
 *
 * Currently available are the types `.airport`, `.city`, and `.any`
 */
WAConvo.location = {
  airport: 'AIRPORT',
  city: 'CITY',
  any: 'AIRPORT,CITY'
};

/**
 * A handy list of direction types, to be used in the Flight Busiest Period API:
 *
 * ```js
 * waconvo.travel.analytics.airTraffic.busiestPeriod.get({
 *   cityCode: 'par',
 *   perdiod: 2015,
 *   direction: WAConvo.direction.arriving
 * });
 * ```
 *
 * Currently available are the types `.arriving` and `.departing`
 */

WAConvo.direction = {
  arriving: 'ARRIVING',
  departing: 'DEPARTING'
};

export default WAConvo;
