import { getResortImage } from "./get-resort-image";
import iberoStarImg from "../../../images/iberostar.png";
import aguamarinaImg from "../../../images/Aguamarina.png";
import piramidesImg from "../../../images/Piramides.png";

describe("getCorrectResortImage function", () => {
  test("returns correct image path for known hotel names", () => {
    expect(getResortImage({ hotelName: "Iberostar Grans Salome" })).toBe(
      iberoStarImg
    );
    expect(getResortImage({ hotelName: "Aguamarina Golf Hotel" })).toBe(
      aguamarinaImg
    );
    expect(getResortImage({ hotelName: "Las Piramides Resort" })).toBe(
      piramidesImg
    );
  });
  test("returns empty string for unknown hotel names", () => {
    expect(getResortImage({ hotelName: "Unknown Hotel" })).toBe("");
  });
});
