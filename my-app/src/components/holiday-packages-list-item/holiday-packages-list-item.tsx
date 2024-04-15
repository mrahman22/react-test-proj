import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../star-rating";
import {
  Container,
  Image,
  HotelInfo,
  Text,
  BookNowButton,
  Button,
  HotelOverview,
} from "./holiday-packages-list-item.styled-components";
import { getResortImage } from "../helpers/get-resort-image";
import { HolidayPackagesListItemProps } from "./holiday-packages-list-item.intefaces";
import { formatAmount } from "../helpers/format-amount";

export const HolidayPackagesListItem: React.FC<
  HolidayPackagesListItemProps
> = ({
  holidayPackage: {
    id,
    hotelName,
    resortName,
    location,
    rating,
    extraInfo: {
      numberOfGuest: { adults, children, infants },
      dateInfo: { date, numOfDays },
      departingFrom,
    },
    priceInPounds,
    hotelOverview,
  },
}) => {
  const [showHotelOverview, setShowHotelOverview] = useState(false);

  const resortImgSrc = getResortImage({ hotelName });

  return (
    <>
      <Container key={id}>
        <Image src={resortImgSrc} alt="holiday package" />
        <HotelInfo>
          <div>
            <h1>{hotelName}</h1>
            <Text>
              {resortName}, {location}
            </Text>
            <StarRating rating={rating} />
            <Text>
              <span>{adults}</span> adults, <span>{children}</span>{" "}
              {children > 1 ? "children" : "child"}{" "}
              {infants > 0 && (
                <>
                  <span>{infants}</span> infant
                </>
              )}
            </Text>
            <Text>
              <span>{date}</span> for <span>{numOfDays} days</span>
            </Text>
            <Text>
              departing from <span>{departingFrom}</span>
            </Text>
            <BookNowButton>
              Book now <span>{formatAmount({ amount: priceInPounds })}</span>
            </BookNowButton>
          </div>
        </HotelInfo>
        <Button
          type="button"
          onClick={() => setShowHotelOverview(!showHotelOverview)}
        >
          {`Read ${!showHotelOverview ? "more" : "less"} about this hotel`}{" "}
          {!showHotelOverview ? (
            <FontAwesomeIcon icon={faChevronRight} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </Button>
      </Container>
      {showHotelOverview && (
        <HotelOverview>
          <h3>Overview</h3>
          <Text>{hotelOverview}</Text>
        </HotelOverview>
      )}
    </>
  );
};
