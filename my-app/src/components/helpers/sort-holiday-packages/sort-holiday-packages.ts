import { HolidayPackage } from "../../holiday-packages-lists/holiday-packages-lists.interfaces";
import {
  ALPHABETICALLY,
  PRICE,
  STAR_RATING,
} from "../../constants/sorting-types";

export const sortHolidayPackages = ({
  holidayPackages,
  sortedBy,
}: {
  holidayPackages: HolidayPackage[];
  sortedBy: string;
}): HolidayPackage[] => {
  return holidayPackages.sort((a, b) => {
    if (sortedBy === ALPHABETICALLY) {
      return a.hotelName.localeCompare(b.hotelName);
    } else if (sortedBy === PRICE) {
      return a.priceInPounds - b.priceInPounds;
    } else if (sortedBy === STAR_RATING) {
      return b.rating - a.rating;
    } else {
      return 0;
    }
  });
};
