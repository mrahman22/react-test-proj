import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  width: 600px;
  height: 190px;
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 65%;
`;

export const HotelInfo = styled.div`
  width: 35%;
  padding: 0 20px;

  h1 {
    margin-bottom: 2px;
    font-size: 14px;
    color: darkblue;
    font-family: Arial, sans-serif;
  }
`;

export const Text = styled.p`
  margin: 4px 0px;
  font-size: 10px;
  font-family: Arial, sans-serif;
  color: lightgray;

  span {
    color: black;
  }
`;

export const Button = styled.button`
  all: unset;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  text-align: center;
  padding: 4px 12px;
  font-size: 12px;
  font-family: Arial, sans-serif;
  color: darkblue;
`;

export const HotelOverview = styled.div`
  width: 600px;
  padding: 10px;
  background-color: white;
  font-size: 12px;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  color: darkblue;

  h3 {
    font-size: 12px;
    color: darkblue;
    font-family: Arial, sans-serif;
  }

  p {
    color: black;
  }
`;

export const BookNowButton = styled.button`
  all: unset;
  margin-top: 10px;
  background-color: #ffd700;
  font-size: 12px;
  padding: 12px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  color: darkblue;
  font-weight: bold;
  width: 170px;
  height: 25px;
  text-align: center;

  span {
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
