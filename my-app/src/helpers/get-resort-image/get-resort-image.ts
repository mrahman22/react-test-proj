import iberoStarImg from "../../../images/iberostar.png";
import aguamarinaImg from "../../../images/Aguamarina.png";
import piramidesImg from "../../../images/Piramides.png";

export const getResortImage = ({
  hotelName,
}: {
  hotelName: string;
}): string => {
  const resortImages: { [key: string]: string } = {
    "Iberostar Grans Salome": iberoStarImg,
    "Aguamarina Golf Hotel": aguamarinaImg,
    "Las Piramides Resort": piramidesImg,
  };

  return resortImages[hotelName] || "";
};
