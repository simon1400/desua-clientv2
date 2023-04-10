import styled from "@emotion/styled";

export const PriceS = styled.div(({theme}) => `
  display: flex;
  font-size: 14px;
  font-weight: 600;
  gap: 8px;
  span{
    color: ${theme.palette.primary.main};
  }
  del{
    color: rgb(125, 135, 156); 
  }
`)