import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
`;
