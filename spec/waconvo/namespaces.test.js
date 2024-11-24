import WAConvo from '../../src/waconvo';

let waconvo;

describe('Namespaces', () => {
  it('should exports an Client object', () => {
    expect(WAConvo).toBeDefined();
  });

  describe('.instance', () => {
    beforeEach(() => {
      waconvo = new WAConvo({
        clientId: '123',
        clientSecret: '234'
      });
    });

    it('should define all expected paths', () => {
      expect(waconvo.referenceData).toBeDefined();
      expect(waconvo.referenceData.urls).toBeDefined();
      expect(waconvo.referenceData.urls.checkinLinks).toBeDefined();
      expect(waconvo.referenceData.location).toBeDefined();
      expect(waconvo.referenceData.locations).toBeDefined();
      expect(waconvo.referenceData.locations.airports).toBeDefined();
      expect(waconvo.referenceData.locations.cities).toBeDefined();
      expect(waconvo.referenceData.locations.hotel).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byCity).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byGeocode).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byHotels).toBeDefined();
      expect(waconvo.referenceData.locations.pointOfInterest).toBeDefined();
      expect(waconvo.referenceData.locations.pointsOfInterest).toBeDefined();
      expect(waconvo.referenceData.locations.pointsOfInterest.bySquare).toBeDefined();
      expect(waconvo.referenceData.airlines).toBeDefined();
      expect(waconvo.referenceData.recommendedLocations).toBeDefined();

      expect(waconvo.schedule).toBeDefined();
      expect(waconvo.schedule.flights).toBeDefined();

      expect(waconvo.analytics).toBeDefined();
      expect(waconvo.analytics.itineraryPriceMetrics).toBeDefined();

      expect(waconvo.travel).toBeDefined();
      expect(waconvo.travel.analytics).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic.traveled).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic.booked).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic.busiestPeriod).toBeDefined();
      expect(waconvo.travel.predictions).toBeDefined();
      expect(waconvo.travel.predictions.tripPurpose).toBeDefined();
      expect(waconvo.travel.predictions.flightDelay).toBeDefined();

      expect(waconvo.shopping).toBeDefined();
      expect(waconvo.shopping.flightDates).toBeDefined();
      expect(waconvo.shopping.flightDestinations).toBeDefined();
      expect(waconvo.shopping.flightOffers).toBeDefined();
      expect(waconvo.shopping.flightOffersSearch).toBeDefined();
      expect(waconvo.shopping.flightOffers.prediction).toBeDefined();
      expect(waconvo.shopping.flightOffers.pricing).toBeDefined();
      expect(waconvo.shopping.seatmaps).toBeDefined();

      expect(waconvo.shopping.activities).toBeDefined();
      expect(waconvo.shopping.activities.bySquare).toBeDefined();
      expect(waconvo.shopping.activity).toBeDefined();

      expect(waconvo.booking).toBeDefined();
      expect(waconvo.booking.flightOrders).toBeDefined();

      expect(waconvo.shopping.hotelOfferSearch).toBeDefined();
      expect(waconvo.shopping.hotelOffersSearch).toBeDefined();

      expect(waconvo.shopping.availability).toBeDefined();
      expect(waconvo.shopping.availability.flightAvailabilities).toBeDefined();

      expect(waconvo.shopping.transferOffers).toBeDefined();

      expect(waconvo.booking.flightOrder).toBeDefined();
      expect(waconvo.booking.hotelBookings).toBeDefined();

      expect(waconvo.eReputation).toBeDefined();
      expect(waconvo.eReputation.hotelSentiments).toBeDefined();

      expect(waconvo.media).toBeDefined();
      expect(waconvo.media.files).toBeDefined();

      expect(waconvo.ordering).toBeDefined();
      expect(waconvo.ordering.transferOrders).toBeDefined();
      expect(waconvo.ordering.transferOrder('XXX').transfers.cancellation).toBeDefined();

      expect(waconvo.airport).toBeDefined();
      expect(waconvo.airport.directDestinations).toBeDefined();
      expect(waconvo.airport.predictions).toBeDefined();
      expect(waconvo.airport.predictions.onTime).toBeDefined();

      expect(waconvo.location).toBeDefined();
      expect(waconvo.location.analytics).toBeDefined();
      expect(waconvo.location.analytics.categoryRatedAreas).toBeDefined();

      expect(waconvo.airline.destinations).toBeDefined();
    });

    it('should define all expected .get methods', () => {
      expect(waconvo.referenceData.urls.checkinLinks.get).toBeDefined();
      expect(waconvo.referenceData.location('ALHR').get).toBeDefined();
      expect(waconvo.referenceData.locations.get).toBeDefined();
      expect(waconvo.referenceData.locations.airports.get).toBeDefined();
      expect(waconvo.referenceData.locations.cities.get).toBeDefined();
      expect(waconvo.referenceData.locations.hotel.get).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byCity.get).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byGeocode.get).toBeDefined();
      expect(waconvo.referenceData.locations.hotels.byHotels.get).toBeDefined();
      expect(waconvo.referenceData.locations.pointOfInterest('XXX').get).toBeDefined();
      expect(waconvo.referenceData.locations.pointsOfInterest.get).toBeDefined();
      expect(waconvo.referenceData.locations.pointsOfInterest.bySquare.get).toBeDefined();
      expect(waconvo.referenceData.airlines.get).toBeDefined();
      expect(waconvo.referenceData.recommendedLocations.get).toBeDefined();

      expect(waconvo.travel.analytics.airTraffic.traveled.get).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic.booked.get).toBeDefined();
      expect(waconvo.travel.analytics.airTraffic.busiestPeriod.get).toBeDefined();
      expect(waconvo.travel.predictions.tripPurpose.get).toBeDefined();
      expect(waconvo.travel.predictions.flightDelay.get).toBeDefined();

      expect(waconvo.shopping.flightDates.get).toBeDefined();
      expect(waconvo.shopping.flightDestinations.get).toBeDefined();
      expect(waconvo.shopping.flightOffersSearch.get).toBeDefined();
      expect(waconvo.shopping.seatmaps.get).toBeDefined();

      expect(waconvo.shopping.hotelOfferSearch('XXX').get).toBeDefined();
      expect(waconvo.shopping.hotelOffersSearch.get).toBeDefined();

      expect(waconvo.shopping.activities.get).toBeDefined();
      expect(waconvo.shopping.activities.bySquare.get).toBeDefined();
      expect(waconvo.shopping.activity('XXX').get).toBeDefined();

      expect(waconvo.booking.flightOrder('XXX').get).toBeDefined();

      expect(waconvo.schedule.flights.get).toBeDefined();

      expect(waconvo.analytics.itineraryPriceMetrics.get).toBeDefined();

      expect(waconvo.eReputation.hotelSentiments.get).toBeDefined();

      expect(waconvo.airport.predictions.onTime.get).toBeDefined();

      expect(waconvo.location.analytics.categoryRatedAreas.get).toBeDefined();

      expect(waconvo.airline.destinations.get).toBeDefined();
    });

    it('should define all expected .post methods', () => {
      expect(waconvo.shopping.flightOffers.prediction.post).toBeDefined();
      expect(waconvo.booking.flightOrders.post).toBeDefined();
      expect(waconvo.shopping.flightOffersSearch.post).toBeDefined();
      expect(waconvo.shopping.flightOffers.pricing.post).toBeDefined();
      expect(waconvo.shopping.seatmaps.post).toBeDefined();
      expect(waconvo.booking.hotelBookings.post).toBeDefined();
      expect(waconvo.booking.hotelOrders.post).toBeDefined();
      expect(waconvo.shopping.transferOffers.post).toBeDefined();
      expect(waconvo.ordering.transferOrders.post).toBeDefined();
      expect(waconvo.ordering.transferOrder('XXX').transfers.cancellation.post).toBeDefined();
    });

    it('should define all expected .delete methods', () => {
      expect(waconvo.booking.flightOrder('XXX').delete).toBeDefined();
    });

    it('.waconvo.referenceData.urls.checkinLinks.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.urls.checkinLinks.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    it('.waconvo.referenceData.location().get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.location('ALHR').get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/ALHR', {});
    });

    it('.waconvo.referenceData.locations.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    it('.waconvo.referenceData.locations.airports.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.airports.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });

    it('.waconvo.referenceData.locations.cities.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.cities.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/cities', {});
    });

    it('.waconvo.referenceData.locations.hotel.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.hotel.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotel', {});
    });

    it('.waconvo.referenceData.locations.hotels.byCity.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.hotels.byCity.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-city', {});
    });

    it('.waconvo.referenceData.locations.hotels.byGeocode.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.hotels.byGeocode.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-geocode', {});
    });

    it('.waconvo.referenceData.locations.hotels.byHotels.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.hotels.byHotels.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/hotels/by-hotels', {});
    });

    it('.waconvo.referenceData.recommendedLocations.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.recommendedLocations.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/recommended-locations', {});
    });

    it('.waconvo.referenceData.locations.pointsOfInterest.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.pointsOfInterest.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois', {});
    });

    it('.waconvo.referenceData.locations.pointOfInterest("XXX").get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.pointOfInterest('XXX').get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/XXX');
    });

    it('.waconvo.referenceData.locations.pointsOfInterest.bySquare.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.locations.pointsOfInterest.bySquare.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/by-square', {});
    });

    it('.waconvo.location.analytics.categoryRatedAreas.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.location.analytics.categoryRatedAreas.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/location/analytics/category-rated-areas', {});
    });

    it('.waconvo.referenceData.airlines.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.referenceData.airlines.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/airlines', {});
    });

    it('.waconvo.schedule.flights.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.schedule.flights.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v2/schedule/flights', {});
    });

    it('.waconvo.analytics.itineraryPriceMetrics.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.analytics.itineraryPriceMetrics.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/analytics/itinerary-price-metrics', {});
    });

    it('.waconvo.travel.analytics.airTraffic.traveled.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.travel.analytics.airTraffic.traveled.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/traveled', {});
    });

    it('.waconvo.travel.analytics.airTraffic.booked.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.travel.analytics.airTraffic.booked.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/booked', {});
    });

    it('.waconvo.travel.analytics.airTraffic.busiestPeriod.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.travel.analytics.airTraffic.busiestPeriod.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/busiest-period', {});
    });

    it('.waconvo.shopping.flightDates.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.flightDates.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-dates', {});
    });

    it('.waconvo.shopping.flightDestinations.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.flightDestinations.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-destinations', {});
    });

    it('.waconvo.shopping.flightOffers.prediction.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.flightOffers.prediction.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers/prediction', {});
    });

    it('.waconvo.booking.flightOrders.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.booking.flightOrders.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/booking/flight-orders', {});
    });

    it('.waconvo.shopping.flightOffers.pricing.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.flightOffers.pricing.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers/pricing', {});
    });

    it('.waconvo.shopping.flightOffersSearch.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.flightOffersSearch.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    it('.waconvo.shopping.flightOffersSearch.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.flightOffersSearch.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    it('.waconvo.shopping.seatmaps.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.seatmaps.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    it('.waconvo.shopping.seatmaps.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.seatmaps.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    it('.waconvo.shopping.hotelOfferSearch().get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.hotelOfferSearch('XXX').get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v3/shopping/hotel-offers/XXX', {});
    });

    it('.waconvo.shopping.hotelOffersSearch.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.hotelOffersSearch.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v3/shopping/hotel-offers', {});
    });

    it('.waconvo.shopping.activities.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.activities.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities', {});
    });

    it('.waconvo.shopping.activities.bySquare.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.activities.bySquare.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities/by-square', {});
    });

    it('.waconvo.shopping.activity().get', () => {
      waconvo.client.get = jest.fn();
      waconvo.shopping.activity('XXX').get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/shopping/activities/XXX');
    });

    it('.waconvo.booking.flightOrder().get', () => {
      waconvo.client.get = jest.fn();
      waconvo.booking.flightOrder('XXX').get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    it('.waconvo.booking.flightOrder().get throws when not providing an orderId', () => {
      expect(() => waconvo.booking.flightOrder().get())
        .toThrow(new Error('MISSING_REQUIRED_PARAMETER'));
    });

    it('.waconvo.booking.flightOrder().delete', () => {
      waconvo.client.delete = jest.fn();
      waconvo.booking.flightOrder('XXX').delete();
      expect(waconvo.client.delete)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    it('.waconvo.booking.flightOrder().delete throws when not providing an orderId', () => {
      expect(() => waconvo.booking.flightOrder().delete())
        .toThrow(new Error('MISSING_REQUIRED_PARAMETER'));
    });

    it('.waconvo.booking.hotelBookings.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.booking.hotelBookings.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/booking/hotel-bookings', {});
    });

    it('.waconvo.booking.hotelOrders.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.booking.hotelOrders.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v2/booking/hotel-orders', {});
    });

    it('.waconvo.eReputation.hotelSentiments.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.eReputation.hotelSentiments.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v2/e-reputation/hotel-sentiments', {});
    });

    it('.waconvo.travel.predictions.tripPurpose.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.travel.predictions.tripPurpose.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/trip-purpose', {});
    });

    it('.waconvo.travel.predictions.flightDelay.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.travel.predictions.flightDelay.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/flight-delay', {});
    });

    it('.waconvo.airport.directDestinations.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.airport.directDestinations.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/airport/direct-destinations', {});
    });

    it('.waconvo.airport.predictions.onTime.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.airport.predictions.onTime.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/airport/predictions/on-time', {});
    });

    it('.waconvo.shopping.availability.flightAvailabilities.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.availability.flightAvailabilities.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/shopping/availability/flight-availabilities', {});
    });

    it('.waconvo.shopping.flight_offers.upselling.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.flightOffers.upselling.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers/upselling', {});
    });

    it('.waconvo.airline.destinations.get', () => {
      waconvo.client.get = jest.fn();
      waconvo.airline.destinations.get();
      expect(waconvo.client.get)
        .toHaveBeenCalledWith('/v1/airline/destinations', {});
    });

    it('.waconvo.shopping.transferOffers.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.shopping.transferOffers.post();
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/shopping/transfer-offers', {});
    });

    it('.waconvo.ordering.transferOrders.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.ordering.transferOrders.post({}, '1234123123');
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/ordering/transfer-orders?offerId=1234123123', {});
    });

    it('.waconvo.ordering.transferOrders().transfers.cancellation.post', () => {
      waconvo.client.post = jest.fn();
      waconvo.ordering.transferOrder('XXX').transfers.cancellation.post({}, 12345);
      expect(waconvo.client.post)
        .toHaveBeenCalledWith('/v1/ordering/transfer-orders/XXX/transfers/cancellation?confirmNbr=12345', {});
    });

  });
});
