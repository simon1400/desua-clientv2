import styled from "@emotion/styled";

export const PriceS = styled.div<{big?: boolean}>(({theme, big = false}) => `
  display: flex;
  font-size: ${big ? "30px" : "20px"};
  font-weight: ${big ? "700" : "600"};
  white-space: nowrap;
  gap: 8px;
  span{
    color: ${theme.palette.primary.main};
  }
  del{
    color: rgb(125, 135, 156); 
  }
`)