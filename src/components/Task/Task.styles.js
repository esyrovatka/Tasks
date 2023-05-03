import { Row } from "antd";
import styled from "styled-components";

export const TaskStyles = styled(Row)`
  background-color: #babad3;
  margin: 8px;
  padding: 10px;
  border-radius: 5px;
  color: #000;
  justify-content: space-evenly;
  align-items: center;
  min-height: 120px;

  svg {
    cursor: pointer;
  }
  .content {
    color: #121d74;
  }

  .status {
    border: 2px solid green;
    padding: 5px 10px;
    min-width: 100px;
    text-transform: capitalize;
  }

  .incomplete {
    border: 2px solid red;
    padding: 5px 10px;
  }
`;
