/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styled from 'styled-components'

const MouseInfo = ({ info }) => {
  return (
    <MouseInfoContainer>
      <CharacteristicsStyled>Характеристики</CharacteristicsStyled>

      {Object?.entries(info)?.map(([key, value]) => (
        <MouseInfoItem key={key}>
          <Label>{key}:</Label> {value}
        </MouseInfoItem>
      ))}
    </MouseInfoContainer>
  )
}
const DescriptionInfo = ({ infoDescription }) => {
  return (
    <DescriptionInfoULSTYLED>
      <CharacteristicsStyled>Описание</CharacteristicsStyled>
      {Object?.entries(infoDescription)?.map(([key, value]) => (
        <MouseInfoItem key={key}>{value}</MouseInfoItem>
      ))}
    </DescriptionInfoULSTYLED>
  )
}
const CardPage = ({ mouseInfo, firstText, images }) => {
  return (
    <CONTAINERDIVSTYLED>
      <DIVCONTAINERSTYLED>
        <DIVSTYLED>
          <div className='gallery-container'>
            <ImageGallery items={images} showNav={false} />
          </div>
        </DIVSTYLED>
        <DIVBUTTONSTYLED>
          <TEXTSTYLED>
            Мышь проводная игровая Redragon Cobra FPS M711-FPS
          </TEXTSTYLED>
          <PRICESTYLED>2 590 c.</PRICESTYLED>
          <BUTTONSTYLED>
            <ImWhatsapp color='#fff' />
            Написать нам
          </BUTTONSTYLED>
        </DIVBUTTONSTYLED>
      </DIVCONTAINERSTYLED>
      <DivDescriptionAndCharacteristicsStyled>
        <MouseInfo info={mouseInfo} />
        <DescriptionInfo infoDescription={firstText} />
      </DivDescriptionAndCharacteristicsStyled>
    </CONTAINERDIVSTYLED>
  )
}

export default CardPage

const CONTAINERDIVSTYLED = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 5px;
  }
`
const DIVCONTAINERSTYLED = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0px auto;
  padding: 20px;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0px;
    padding: 0px;
  }
`
const DIVSTYLED = styled.div`
  width: 565px;
  height: 420px;
  gap: 0px;
  border-radius: 20px;
  opacity: 0px;
  background-color: #fff;
  padding: 20px;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`
const DivDescriptionAndCharacteristicsStyled = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`
const MouseInfoContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-left: 10%;
  margin-top: 70px;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  align-self: stretch;
  width: 47%;
  margin-left: 10%;
  background: #fff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  list-style: none;
  @media (max-width: 1024px) {
    border-radius: 5px;
    margin-left: 0%;
    margin-top: 10px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #555151;
    font-family: Montserrat, sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    align-self: stretch;
    width: 100%;
    background: #fff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    list-style: none;
  }
`
const DescriptionInfoULSTYLED = styled.ul`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  align-self: stretch;
  width: 30%;
  margin-left: 3%;
  background: #fff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  list-style: none;
  margin-top: 70px;
  @media (max-width: 1024px) {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #555151;
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    align-self: stretch;
    width: 100%;
    margin-left: 0%;
    background: #fff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    list-style: none;
    margin-top: 10px;
    margin-bottom: 124px;
  }
`
const CharacteristicsStyled = styled.h1`
  -webkit-text-size-adjust: 100%;
  line-height: 24px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 18px;
  color: #7b7b7b;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`
const MouseInfoItem = styled.div`
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    font-size: 9px;
  }
`

const Label = styled.span`
  font-weight: bold;
`
const DIVBUTTONSTYLED = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  align-self: stretch;
  width: 30%;
  margin-left: 20px;
  background: #fff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1024px) {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: #555151;
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    align-self: stretch;
    width: 100%;
    height: auto;
    margin-left: 0px;
    background: #fff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
  }
`
const TEXTSTYLED = styled.p`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 0 0 15px 0;
  text-decoration: none;
  font-style: normal;
  font-family: Montserrat, sans-serif;
  color: #555151;
  word-wrap: break-word;
  font-size: 18px;
  margin-bottom: 20px;
  padding-left: 17px;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`
const PRICESTYLED = styled.h1`
  -webkit-text-size-adjust: 100%;
  color: #0060ce;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  font-size: 30px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`
const BUTTONSTYLED = styled.button`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Montserrat, sans-serif;
  outline: none !important;
  transition: all 150ms;
  width: 100%;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  background: #4abc05;
  border: 1px solid #4abc05;
  border-bottom: 0;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  vertical-align: middle;
  line-height: 1.428571429;
  cursor: pointer;
  padding: 10px;
  padding-left: 0;
  padding-right: 0;
  -webkit-box-shadow: 0 1px 12px 0 #4abc05;
  -moz-box-shadow: 0 1px 12px 0 #4abc05;
  box-shadow: 0 1px 12px 0 #4abc05;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1024px) {
    width: 200px;
    font-size: 10px;
    padding: 5px;
    margin-top: 10px;
    gap: 10px;
  }
`
