import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "order-1 Monday Tuesday Wednesday Thursday Friday Saturday Sunday";

  grid-template-columns: 50px repeat(7, 1fr);
  height: 1200px;
`;
GridContainer.displayName = "GridContainer";
