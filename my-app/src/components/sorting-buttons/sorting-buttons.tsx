import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faStar,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";
import { SortBy, SortButton } from "./sorting-buttons.styled-components";
import type { SortingButtonsProps } from "./sorting-buttons.interfaces";
import { ALPHABETICALLY, PRICE, STAR_RATING } from "../constants/sorting-types";

export const SortingButtons: React.FC<SortingButtonsProps> = ({
  sortedBy,
  sortBy,
}) => {
  const renderIcon = (icon: IconDefinition) => {
    return <FontAwesomeIcon icon={icon} height="20px" width="20px" />;
  };

  return (
    <SortBy>
      <SortButton
        type="button"
        active={sortedBy === ALPHABETICALLY}
        onClick={() => sortBy(ALPHABETICALLY)}
      >
        sort alphabetically
        {renderIcon(faArrowDown)}
      </SortButton>
      <SortButton
        type="button"
        active={sortedBy === PRICE}
        onClick={() => sortBy(PRICE)}
      >
        sort by price
        {renderIcon(faSterlingSign)}
      </SortButton>
      <SortButton
        type="button"
        active={sortedBy === STAR_RATING}
        onClick={() => sortBy(STAR_RATING)}
      >
        sort by star rating
        {renderIcon(faStar)}
      </SortButton>
    </SortBy>
  );
};
