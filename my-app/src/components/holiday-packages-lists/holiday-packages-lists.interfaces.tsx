export interface HolidayPackage {
  id: number;
  hotelName: string;
  resortName: string;
  location: string;
  rating: number;
  priceInPounds: number;
  hotelOverview: string;
  extraInfo: {
    numberOfGuest: {
      adults: number;
      children: number;
      infants: number;
    };
    dateInfo: {
      date: string;
      numOfDays: number;
    };
    departingFrom: string;
  };
}
