import React, { useState } from "react";
import { holidayPackagesLists } from "../../data/holiday-packages-lists-data";
import { HolidayPackagesListItem } from "../holiday-packages-list-item";
import { sortHolidayPackages } from "../../helpers/sort-holiday-packages";
import { Container } from "./holiday-packages-lists.styled-components";
import { SortingButtons } from "../sorting-buttons";
import { PRICE } from "../constants/sorting-types";

export const HolidayPackagesLists: React.FC = () => {
  const [sortedBy, setSortedBy] = useState<string>(PRICE);

  const sortBy = (field: string) => {
    setSortedBy(field);
  };

  const sortedHolidayPackages = sortHolidayPackages({
    holidayPackages: holidayPackagesLists,
    sortedBy,
  });

  return (
    <Container>
      <SortingButtons sortedBy={sortedBy} sortBy={sortBy} />
      <div>
        {sortedHolidayPackages.map((holidayPackage) => (
          <HolidayPackagesListItem
            key={holidayPackage.id}
            holidayPackage={holidayPackage}
          />
        ))}
      </div>
    </Container>
  );
};
