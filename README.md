# WAConvo Node SDK

WAConvo provides a rich set of APIs for the travel industry. For more details, check out the [WAConvo for Developers Portal](https://developers.waconvo.com).

## Installation

This module has been tested using [Node LTS versions](https://nodejs.org/en/about/releases/). You can install it using Yarn or NPM.

```sh
npm install waconvo-flight-booking --save
```

## Getting Started

To make your first API call, you will need to [register](https://developers.waconvo.com/register) for an WAConvo Developer Account and [set up your first application](https://developers.waconvo.com/my-apps).

```js
const WAConvo = require('waconvo');

const waconvo = new WAConvo({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET'
});

waconvo.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-06-01',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
```

## Examples

You can find all the endpoints in self-contained [code examples](https://github.com/waconvo/waconvo-code-examples).

## Initialization

The client can be initialized directly.

```js
// Initialize using parameters
const waconvo = new WAConvo({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET'
});
```

Alternatively, it can be initialized without any parameters if the environment variables `WACONVO_CLIENT_ID` and `WACONVO_CLIENT_SECRET` are present.

```js
const waconvo = new WAConvo();
```

Your credentials can be found on the [WAConvo dashboard](https://developers.waconvo.com/my-apps).

By default, the SDK environment is set to `test` environment. To switch to a `production` (pay-as-you-go) environment, please switch the hostname as follows:

```js
const waconvo = new WAConvo({
  hostname: 'production'
});
```

## Documentation

WAConvo has a large set of APIs, and our documentation is here to get you started today. Head over to our [reference documentation](https://waconvo.github.io/waconvo-flight-booking/) for in-depth information about every SDK method, its arguments and return types.


  * [Get Started](https://waconvo.github.io/waconvo-flight-booking/)
  * [Find an Airport](https://waconvo.github.io/waconvo-flight-booking/#airports)
  * [Find a Flight](https://waconvo.github.io/waconvo-flight-booking/#flightofferssearch)
  * [Get Flight Inspiration](https://waconvo.github.io/waconvo-flight-booking/#flightdestinations)

## Making API calls

This library conveniently maps every API path to a similar path. For example, `GET /v2/reference-data/urls/checkin-links?airlineCode=BA` would be:

```js
waconvo.referenceData.urls.checkinLinks.get({ airlineCode: 'BA' });
```

Similarly, to select a resource by ID, you can pass in the ID to the **singular** path. For example,  `GET /v1/shopping/hotelOffers/123/` would be:

```js
waconvo.shopping.hotelOffer('123').get(...);
```

You can make any arbitrary `GET` API call directly with the `.client.get` method as well:

```js
waconvo.client.get('/v2/reference-data/urls/checkin-links', { airlineCode: 'BA' });
```

Or, with a `POST` using `.client.post` method:
```js
waconvo.client.post('/v1/shopping/flight-offers/pricing', { data });
```

## Promises

Every API call returns a `Promise` that either resolves or rejects.

Every resolved API call returns a `Response` object containing a `body` attribute with the raw response. If the API call contained a JSON response, it will parse the JSON into the `result` attribute. If this data contains a `data` key, that will be made available in `data` attribute.

For a failed API call, it returns a `ResponseError`object containing the (parsed or unparsed) response, the request, and an error code.

```js
waconvo.referenceData.urls.checkinLinks.get({
  airlineCode: 'BA'
}).then(function(response){
  console.log(response.body);   //=> The raw body
  console.log(response.result); //=> The fully parsed result
  console.log(response.data);   //=> The data attribute taken from the result
}).catch(function(error){
  console.log(error.response); //=> The response object with (un)parsed data
  console.log(error.response.request); //=> The details of the request made
  console.log(error.code); //=> A unique error code to identify the type of error
});
```

## Pagination

If an API endpoint supports pagination, the other pages are available under the `.next`, `.previous`, `.last` and `.first` methods.

```js
waconvo.referenceData.locations.get({
  keyword: 'LON',
  subType: 'AIRPORT,CITY'
}).then(function(response){
  console.log(response.data); // first page
  return waconvo.next(response);
}).then(function(nextResponse){
  console.log(nextResponse.data); // second page
});
```

If a page is not available, the response will resolve to `null`.

## Logging & Debugging

The SDK makes it easy to add your own logger that is compatible with the default `console`.

```js
const waconvo = new WAConvo({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET',
  logger: new MyConsole()
});
```

Additionally, to enable more verbose logging, you can set the appropriate level on your own logger. The easiest way would be to enable debugging via a parameter during initialization, or using the `WACONVO_LOG_LEVEL` environment variable. The available options are `silent` (default), `warn`, and `debug`.

```js
const waconvo = new WAConvo({
  clientId: 'REPLACE_BY_YOUR_API_KEY',
  clientSecret: 'REPLACE_BY_YOUR_API_SECRET',
  logLevel: 'debug'
});
```

## List of supported endpoints

```js
//Airport Routes 
waconvo.airport.directDestinations.get({
     departureAirportCode: 'CDG',
})

//Airline Routes
//find all destinations served by a given airline
waconvo.airline.destinations.get({
     airlineCode: 'BA',
 })

// Flight Inspiration Search
waconvo.shopping.flightDestinations.get({
  origin : 'MAD'
})

// Flight Cheapest Date Search
waconvo.shopping.flightDates.get({
  origin : 'MAD',
  destination : 'MUC'
})

// Flight Offers Search GET
waconvo.shopping.flightOffersSearch.get({
  originLocationCode: 'SYD',
  destinationLocationCode: 'BKK',
  departureDate: '2022-11-01',
  adults: '2'
})

// Flight Offers Search POST
// A full example can be found at https://github.com/waconvo/waconvo-code-examples
waconvo.shopping.flightOffersSearch.post(body)

// Flight Offers Price
waconvo.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-11-01',
    adults: '1'
}).then(function(response){
    return waconvo.shopping.flightOffers.pricing.post(
      {
        'data': {
          'type': 'flight-offers-pricing',
          'flightOffers': [response.data[0]]
        }
      }
    )
}).then(function(response){
    console.log(response.data);
}).catch(function(responseError){
    console.log(responseError);
});

// Flight Offers Price with additional parameters
// for example: check additional baggage options 
waconvo.shopping.flightOffers.pricing.post(body ,{include: 'bags'});

// Flight Create Orders
// To book the flight-offer(s) returned by the Flight Offers Price
// and create a flight-order with travelers' information.
// A full example can be found at https://git.io/JtnYo
waconvo.booking.flightOrders.post(
  {
    'type': 'flight-order',
    'flightOffers': [priced-offers],
    'travelers': []
  }
);

// Retrieve flight order with ID 'XXX'. This ID comes from the
// Flight Create Orders API, which is a temporary ID in test environment.
waconvo.booking.flightOrder('XXX').get()

// Cancel flight order with ID 'XXX'. This ID comes from the
// Flight Create Orders API, which is a temporary ID in test environment.
waconvo.booking.flightOrder('XXX').delete()

// Flight SeatMap Display
// To retrieve the seat map of each flight included
// in flight offers for MAD-NYC flight on 2021-08-01
waconvo.shopping.flightOffersSearch.get({
  originLocationCode: 'SYD',
  destinationLocationCode: 'BKK',
  departureDate: '2022-11-01',
  adults: '1'
}).then(function(response){
    return waconvo.shopping.seatmaps.post(
      {
        'data': [response.data[0]]
      }
    );
}).then(function(response){
    console.log(response.data);
}).catch(function(responseError){
    console.log(responseError);
});
// To retrieve the seat map for flight order with ID 'XXX'
waconvo.shopping.seatmaps.get({
  'flight-orderId': 'XXX'
});

// Flight Availabilities Search
waconvo.shopping.availability.flightAvailabilities.post(body);

// Branded Fares Upsell 
waconvo.shopping.flightOffers.upselling.post(body);

// Flight Choice Prediction
waconvo.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2022-11-01',
    adults: '2'
}).then(function(response){
    return waconvo.shopping.flightOffers.prediction.post(response);
}).then(function(response){
    console.log(response.data);
}).catch(function(responseError){
    console.log(responseError);
});

// Flight Checkin Links
waconvo.referenceData.urls.checkinLinks.get({
  airlineCode : 'BA'
})

// Airline Code Lookup
waconvo.referenceData.airlines.get({
  airlineCodes : 'U2'
})

// Airports and City Search (autocomplete)
// Find all the cities and airports starting by 'LON'
waconvo.referenceData.locations.get({
  keyword : 'LON',
  subType : WAConvo.location.any
})

// Get a specific city or airport based on its id
waconvo.referenceData.location('ALHR').get()

// Airport Nearest Relevant Airport (for London)
waconvo.referenceData.locations.airports.get({
  longitude : 0.1278,
  latitude  : 51.5074
})

// Flight Most Booked Destinations
waconvo.travel.analytics.airTraffic.booked.get({
  originCityCode : 'MAD',
  period : '2017-08'
}

// Flight Most Traveled Destinations
waconvo.travel.analytics.airTraffic.traveled.get({
  originCityCode : 'MAD',
  period : '2017-01'
})

// Flight Busiest Traveling Period
waconvo.travel.analytics.airTraffic.busiestPeriod.get({
  cityCode: 'MAD',
  period: '2017',
  direction: WAConvo.direction.arriving
})

// City Search API
// finds cities that match a specific word or string of letters. 
// Return a list of cities matching a keyword 'Paris'
waconvo.referenceData.locations.cities.get({
  keyword: 'Paris'
})

//Hotel Name Autocomplete API
//Autocomplete a hotel search field
waconvo.referenceData.locations.hotel.get({
     keyword: 'PARI',
     subType: 'HOTEL_GDS'
})

//Hotel List API 
//Get list of hotels by city code
waconvo.referenceData.locations.hotels.byCity.get({
      cityCode: 'PAR'
    })

//Get List of hotels by Geocode
waconvo.referenceData.locations.hotels.byGeocode.get({
      latitude: 48.83152,
      longitude: 2.24691
    })

//Get List of hotels by hotelIds
waconvo.referenceData.locations.hotels.byHotels.get({
      hotelIds: 'ACPAR245'
    })

// Hotel Search API V3
// Get list of available offers in specific hotels by hotel ids
waconvo.shopping.hotelOffersSearch.get({
    hotelIds: 'RTPAR001',
    adults: '2'
})
// Check offer conditions of a specific offer id
waconvo.shopping.hotelOfferSearch('XXX').get()

// Hotel Booking API v2
waconvo.booking.hotelOrders.post(
  {
    'data': {
        'type': 'hotel-order',
        'guests': [],
        'travelAgent': {},
        'roomAssociations': [],
        'payment': {}
    }
  }
)


// Hotel Booking API v1
waconvo.booking.hotelBookings.post(
  {
    'data': {
      'offerId': 'XXXX',
      'guests': [],
      'payments': [],
      'rooms': []
    }
  }
)

// On-Demand Flight Status
// What's the current status of my flight?
waconvo.schedule.flights.get({
  carrierCode: 'AZ',
  flightNumber: '319',
  scheduledDepartureDate: '2021-03-13'
})


// Points of Interest
// What are the popular places in Barcelona (based a geo location and a radius)
waconvo.referenceData.locations.pointsOfInterest.get({
  latitude : 41.397158,
  longitude : 2.160873
})

// What are the popular places in Barcelona? (based on a square)
waconvo.referenceData.locations.pointsOfInterest.bySquare.get({
  north: 41.397158,
  west: 2.160873,
  south: 41.394582,
  east: 2.177181
})

// Extract the information about point of interest with ID '9CB40CB5D0'
waconvo.referenceData.locations.pointOfInterest('9CB40CB5D0').get()

// Location Score
waconvo.location.analytics.categoryRatedAreas.get({
  latitude : 41.397158,
  longitude : 2.160873
})

// Tours and Activities
// What are the best tours and activities in Barcelona?
waconvo.shopping.activities.get({
  latitude: 41.397158,
  longitude: 2.160873
})

// What are the best tours and activities in Barcelona? (based on a Square)
waconvo.shopping.activities.bySquare.get({
  north: 41.397158,
  west: 2.160873,
  south: 41.394582,
  east: 2.177181
})

// Extract the information about an activity with ID '56777'
waconvo.shopping.activity('56777').get()

// Hotel Ratings
// Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
waconvo.eReputation.hotelSentiments.get({
  hotelIds: 'XKPARC12'
})

// Trip Purpose Prediction
// Forecast traveler purpose, Business or Leisure, together with the probability in the context of search & shopping.
waconvo.travel.predictions.tripPurpose.get({
  originLocationCode: 'NYC',
  destinationLocationCode: 'MAD',
  departureDate: '2021-04-01',
  returnDate: '2021-04-08'
})

// Flight Delay Prediction
// This machine learning API is based on a prediction model that takes the input of the user - time, carrier, airport and aircraft information;
// and predict the segment where the flight is likely to lay.
waconvo.travel.predictions.flightDelay.get({
  originLocationCode: 'BRU',
  destinationLocationCode: 'FRA',
  departureDate: '2020-01-14',
  departureTime: '11:05:00',
  arrivalDate: '2020-01-14',
  arrivalTime: '12:10:00',
  aircraftCode: '32A',
  carrierCode: 'LH',
  flightNumber: '1009',
  duration: 'PT1H05M'
})

// Airport On-time Performance
// Get the percentage of on-time flight departures from JFK
waconvo.airport.predictions.onTime.get({
  airportCode: 'JFK',
  date: '2022-18-01'
})

// Travel Recommendations
waconvo.referenceData.recommendedLocations.get({
  cityCodes: 'PAR',
  travelerCountryCode: 'FR'
})

// Flight Price Analysis
waconvo.analytics.itineraryPriceMetrics.get({
   originIataCode: 'MAD',
   destinationIataCode: 'CDG',
   departureDate: '2022-03-13',
 })

//Cars & Transfers APIs
// Transfer Search API: Search Transfer
waconvo.shopping.transferOffers.post(body);

// Transfer Book API: Book a transfer based on the offer id
waconvo.ordering.transferOrders.post(body, offerId='2094123123');

// Transfer Management API: Cancel a transfer based on the order id & confirmation number
waconvo.ordering.transferOrder('XXX').transfers.cancellation.post({}, confirmNbr='12345');

```

## Development & Contributing

Want to contribute? Read our [Contributors Guide](.github/CONTRIBUTING.md) for guidance on installing and running this code in a development environment.

## License

This library is released under the [MIT License](LICENSE).


[npmjs]: https://www.npmjs.com/package/waconvo
