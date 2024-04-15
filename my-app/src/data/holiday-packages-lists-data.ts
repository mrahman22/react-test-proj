import type { HolidayPackage } from "../components/holiday-packages-lists/holiday-packages-lists.interfaces";

export const holidayPackagesLists: HolidayPackage[] = [
  {
    id: 1,
    hotelName: "Iberostar Grans Salome",
    resortName: "Costa Adeje",
    location: "Tenerife",
    rating: 5,
    priceInPounds: 113650,
    hotelOverview:
      "The Iberostar Grand Salome is a luxurious adult-only hotel located in the popular resort of Costa Adeje. The hotel is situated on the beachfront and offers a range of facilities including a spa, outdoor pool and a choice of restaurants.",
    extraInfo: {
      numberOfGuest: {
        adults: 2,
        children: 2,
        infants: 1,
      },
      dateInfo: {
        date: "3rd July 2019",
        numOfDays: 7,
      },
      departingFrom: "East Midlands",
    },
  },
  {
    id: 2,
    hotelName: "Aguamarina Golf Hotel",
    resortName: "Costa Adeje",
    location: "Tenerife",
    rating: 4,
    priceInPounds: 69680,
    hotelOverview:
      "The Aguamarina Golf Hotel is a luxurious adult-only hotel located in the popular resort of Costa Adeje. The hotel is situated on the beachfront and offers a range of facilities including a spa, outdoor pool and a choice of restaurants.",
    extraInfo: {
      numberOfGuest: {
        adults: 2,
        children: 1,
        infants: 0,
      },
      dateInfo: {
        date: "27th May 2019",
        numOfDays: 7,
      },
      departingFrom: "Liverpool",
    },
  },
  {
    id: 3,
    hotelName: "Las Piramides Resort",
    resortName: "Costa Adeje",
    location: "Tenerife",
    rating: 3,
    priceInPounds: 49999,
    hotelOverview:
      "The Las Piramides Resort is a luxurious adult-only hotel located in the popular resort of Costa Adeje. The hotel is situated on the beachfront and offers a range of facilities including a spa, outdoor pool and a choice of restaurants.",
    extraInfo: {
      numberOfGuest: {
        adults: 2,
        children: 2,
        infants: 0,
      },
      dateInfo: {
        date: "3rd July 2019",
        numOfDays: 7,
      },
      departingFrom: "Manchester",
    },
  },
];
