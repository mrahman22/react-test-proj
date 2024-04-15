import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StarRatingProps } from "./star-rating.interfaces";

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
}: StarRatingProps) => {
  const stars: JSX.Element[] = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <FontAwesomeIcon icon={faStar} color="gold" height="10px" width="10px" />
    );
  }
  return <>{stars}</>;
};
