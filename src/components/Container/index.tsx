import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  padding: 0px 8px;
`;

export const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Container = (props: any) => (
  <FlexBox>
    <ContainerWrapper>{props.children}</ContainerWrapper>
  </FlexBox>
);

export default Container;
