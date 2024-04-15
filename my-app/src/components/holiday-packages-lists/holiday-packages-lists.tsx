import React from "react";

import { holidayPackagesLists } from "../../data/holiday-packages-lists-data";

import { Container } from "./holiday-packages-lists.styled-components";
import { HolidayPackagesListItem } from "../holiday-packages-list-item";

export const HolidayPackagesLists: React.FC = () => {
  return (
    <Container>
      <div>
        {holidayPackagesLists.map((holidayPackage) => (
          <HolidayPackagesListItem
            key={holidayPackage.id}
            holidayPackage={holidayPackage}
          />
        ))}
      </div>
    </Container>
  );
};
