import https     from 'https';
import http      from 'http';

const HOSTS = {
  'test'       : 'test.api.waconvo.com',
  'production' : 'api.waconvo.com'
};

const RECOGNIZED_OPTIONS = [
  'clientId',
  'clientSecret',
  'logger',
  'logLevel',
  'hostname',
  'host',
  'customAppId',
  'customAppVersion',
  'http',
  'ssl',
  'port'
];

/**
 * Helper class for validating parameters
 * @protected
 */
class Validator {

  /**
   * Initialise the client's default value, ensuring the required values are
   * present
   *
   * @param  {Client} client the client object to set the defaults for
   * @param  {Object} options the associative array of options passed to the
   *  client on initialization
   */
  validateAndInitialize(client, options) {
    this.initializeClientCredentials(client, options);
    this.initializeLogger(client, options);
    this.initializeHost(client, options);
    this.initializeCustomApp(client, options);
    this.initializeHttp(client, options);

    this.warnOnUnrecognizedOptions(options, client, RECOGNIZED_OPTIONS);
  }

  // PRIVATE

  initializeClientCredentials(client, options) {
    client.clientId = this.initRequired('clientId', options);
    client.clientSecret = this.initRequired('clientSecret', options);
  }

  initializeLogger(client, options) {
    client.logger    = this.initOptional('logger', options, console);
    client.logLevel = this.initOptional('logLevel', options, 'silent');
  }

  initializeHost(client, options) {
    let hostname = this.initOptional('hostname', options, 'test');
    client.host  = this.initOptional('host', options, HOSTS[hostname]);
    client.port  = this.initOptional('port', options, 443);
    client.ssl   = this.initOptional('ssl', options, true);
  }

  initializeCustomApp(client, options) {
    client.customAppId = this.initOptional('customAppId', options);
    client.customAppVersion = this.initOptional('customAppVersion', options);
  }

  initializeHttp(client, options) {
    let network = client.ssl ? https : http;
    client.http = this.initOptional('http', options, network);
  }

  initRequired(key, options) {
    let result = this.initOptional(key, options);
    if (!result) throw new ArgumentError(`Missing required argument: ${key}`);
    return result;
  }

  initOptional(key, options, fallback = null) {
    //Env variables names expected to be in SNAKE_CASE and uppercase
    let envKey = `WACONVO_${key.replace(/[A-Z]/g, c => `_${c.toLowerCase()}`).toUpperCase()}`;
    let value = options[key] || process.env[envKey] || fallback;
    return value;
  }

  warnOnUnrecognizedOptions(options, client, recognizedOptions) {
    Object.keys(options).forEach((key) => {
      if (recognizedOptions.indexOf(key) === -1 && client.warn()) {
        client.logger.log(`Unrecognized option: ${key}`);
      }
    });
    return null;
  }
}

// PRIVATE

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export default Validator;
