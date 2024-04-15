import styled from "styled-components";
import type { SortButtonProps } from "./sorting-buttons.interfaces";

export const SortBy = styled.div`
  margin-top: 20px;
  margin-right: 220px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`;

export const SortButton = styled.button<SortButtonProps>`
  all: unset;
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#002582" : "white")};
  color: ${(props) => (props.active ? "white" : "#002582")};
  margin-bottom: 1px;
  min-width: 200px;

  svg {
    float: right;
  }
`;
