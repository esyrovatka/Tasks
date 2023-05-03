import styled from "styled-components";

export const TodoListStyles = styled.div`
  text-align: center;

  h1 {
    color: blue;
  }

  .btn_add-task {
    background: blue;
    color: #f4f4f4;
    border-radius: 8px;
    padding: 10px;
    border: 3px solid #0a0a0a;
    cursor: pointer;
    box-shadow: none;
    margin: 40px;

    &:hover {
      color: grey;
      background-color: #f4f4f4;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
      border: 3px solid grey;
    }
  }
`;
