import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HolidayPackagesListItem } from "./holiday-packages-list-item";

describe("HolidayPackagesListItem component", () => {
  const mockPackage = {
    id: 1,
    hotelName: "Iberostar Grans Salome",
    resortName: "Costa Adeje",
    location: "Tenerife",
    rating: 5,
    priceInPounds: 1136.59,
    extraInfo: {
      numberOfGuest: {
        adults: 2,
        children: 0,
        infants: 1,
      },
      dateInfo: {
        date: "2019-07-03",
        numOfDays: 7,
      },
      departingFrom: "East Midlands",
    },
    hotelOverview:
      "The Iberostar Grand Salome is a luxurious adult-only hotel...",
  };

  test("renders component with correct information", () => {
    render(<HolidayPackagesListItem holidayPackage={mockPackage} />);

    expect(screen.getByText(mockPackage.hotelName)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockPackage.resortName}, ${mockPackage.location}`)
    ).toBeInTheDocument();
  });

  test("toggles hotel overview visibility on button click", () => {
    render(<HolidayPackagesListItem holidayPackage={mockPackage} />);

    const button = screen.getByText(/read more about this hotel/i);
    fireEvent.click(button);

    expect(screen.getByText(/overview/i)).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.queryByText(/overview/i)).not.toBeInTheDocument();
  });
});
