import React from 'react'
import styled from 'styled-components'

const ButtonCategory = ({ name, isactive, onClick }) => {
  return (
    <ButtonStyled isactive={isactive} onClick={onClick}>
      {name}
    </ButtonStyled>
  )
}

export default ButtonCategory
export const BtnContainerStyled = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  margin-bottom: 0px;
  flex-direction: row;
  width: 70%;
  margin-left: 11%;
  @media (max-width: 1024px) {
    margin-bottom: 60px;
    width: 80%;
  }
`
export const H3Styled = styled.h3`
  -webkit-text-size-adjust: 100%;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  word-wrap: break-word;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0 0 15px 0;
  color: #555151;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 18px;
    margin: 35px 15px 15px 0;
  }
`

const ButtonStyled = styled.button`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  font-style: normal;
  outline: none !important;
  cursor: pointer;
  border-bottom: 0;
  transition: all 150ms;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  border: none;
  ${({ isactive }) =>
    isactive &&
    `
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: transparent;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    outline: none !important;
    cursor: pointer;
    border-bottom: 0;
    transition: all 150ms;
    color: #000;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    background-color: #dfdfdf;
    box-shadow: 3px 3px 7px -4px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    border: none;
  `}
`
