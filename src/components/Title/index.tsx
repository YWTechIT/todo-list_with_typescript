import styled from "styled-components";

export const TodoWrapper = styled.div`
  border: 3px solid black;
  width: 90%;
  height: 90%;
  margin: 8px 8px;
  text-align: center;
`;

const Title = () => {
  return (
    <TodoWrapper>
      <ul>
        <li>
          <h2>📍 Welcome Back AYW! How can I help you?</h2>
        </li>
        <li>
          <h3>You can do it!</h3>
        </li>
      </ul>
    </TodoWrapper>
  );
};

export default Title;