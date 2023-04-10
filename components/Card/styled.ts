import styled from "@emotion/styled";
import Link from "next/link";

export const CardS = styled.div(({theme}) => `
  overflow: hidden;
  display: block;
  text-decoration: none;
  position: relative;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  border-radius: 8px;
  transition: all 250ms ease-in-out;
  &:hover{
    box-shadow: 0px 8px 45px rgba(3, 0, 71, 0.09);
  }
`)

export const ChipCardWrap = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 2;
`

export const ButtonCountS = styled.div(({theme}) => `
  display: flex;
  button{
    width: 28px;
    min-width: 28px;
    height: 28px;
  }
  span{
    display: inline-block;
    padding: 2px 5px 0;
    font-weight: 600;
    width: 28px;
    text-align: center;
    font-size: 14px;
    height: 28px;
    color: ${theme.palette.text.primary};
  }
`)

export const ControlButtons = styled.div(({theme}) => `
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  svg{
    fill: rgba(0, 0, 0, 0.26)
  }
`)

export const ContentCard = styled.div`
  padding: 16px;
  h3{
    margin-bottom: 8px;
  }
`

export const ControlCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const SwiperNav = styled.div(({theme}) => `
  display: flex;
  button{
    border: none;
    background: transparent;
    transition: all .5s ease;
    padding: 15px;
  }
`)

export const SliderWrap = styled.div(({theme}) => `
  z-index: 1;
  position: relative;
`)

export const SliderVariants = styled.div(({theme}) => `
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
`)