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
> = ({ holidayPackage }) => {
  const [showHotelOverview, setShowHotelOverview] = useState(false);

  const resortImgSrc = getResortImage({
    hotelName: holidayPackage.hotelName,
  });

  return (
    <>
      <Container key={holidayPackage.id}>
        <Image src={resortImgSrc} alt="holiday package" />
        <HotelInfo>
          <div>
            <h1>{holidayPackage.hotelName}</h1>
            <Text>
              {holidayPackage.resortName}, {holidayPackage.location}
            </Text>
            <StarRating rating={holidayPackage.rating} />
            <Text>
              <span>{holidayPackage.extraInfo.numberOfGuest.adults}</span>{" "}
              adults,{" "}
              <span>{holidayPackage.extraInfo.numberOfGuest.children}</span>{" "}
              children{" "}
              {holidayPackage.extraInfo.numberOfGuest.infants > 0 && (
                <>
                  <span>
                    & {holidayPackage.extraInfo.numberOfGuest.infants}
                  </span>{" "}
                  infant
                </>
              )}
            </Text>
            <Text>
              <span>{holidayPackage.extraInfo.dateInfo.date}</span> for{" "}
              <span> {holidayPackage.extraInfo.dateInfo.numOfDays} days</span>
            </Text>
            <Text>
              departing from{" "}
              <span>{holidayPackage.extraInfo.departingFrom}</span>
            </Text>
            <BookNowButton>
              Book now{" "}
              <span>
                {formatAmount({ amount: holidayPackage.priceInPounds })}
              </span>
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
          <Text>{holidayPackage.hotelOverview}</Text>
        </HotelOverview>
      )}
    </>
  );
};
