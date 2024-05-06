import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import ruicon from '../../assets/img/Flag Ru (1).png'
import instagramicons from '../../assets/img/instagram.svg'
import icons from '../../assets/img/left-arrow-line-symbol.png'
import menuicon from '../../assets/img/menu_FILL0_wght400_GRAD0_opsz24.svg'
import searchicons from '../../assets/img/search (1) (1).png'
import whatsapicons from '../../assets/img/whatsapp.svg'
import placeicons from '../../assets/img/Лого.png'
import { urlKyrgyztanIcons } from '../../utils/constants/Url'

const Header = () => {
  const [language, setLanguage] = useState('kg')

  const handleLanguageChange = () => {
    setLanguage(language === 'kg' ? 'ru' : 'kg')
  }
  return (
    <header>
      <UlStyled>
        <IMGMENUSTYLED src={menuicon} alt='' />
        <li>
          <H1Styled>
            <img src={placeicons} alt='контакт икон' />
          </H1Styled>
        </li>
        <ContactListItem>
          Контакты
          <div>
            <IMGARROWSTYLED src={icons} alt='' />
          </div>
        </ContactListItem>
        <LISTINPUTSTYLED>
          <InputStyled placeholder='Поиск среди товаров' />
          <SearchImgStyled src={searchicons} alt='' />
        </LISTINPUTSTYLED>
        <LISTIMGSTYLED>
          <IMGSTYLEDWHATSAP src={instagramicons} alt='' />
          <IMGSTYLEDWHATSAP src={whatsapicons} alt='' />
          <BUTTONSTYLED onClick={handleLanguageChange}>
            <ImgStyled
              src={language === 'kg' ? urlKyrgyztanIcons : ruicon}
              alt='флаг'
            />
            {language === 'kg' ? 'kg' : 'ru'}
          </BUTTONSTYLED>
        </LISTIMGSTYLED>
      </UlStyled>
    </header>
  )
}

export default Header

const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  background: rgba(255, 255, 255, 1);
  padding: 20px;
  gap: 40px;
  box-shadow: 0px 0px 23.58px 0px rgba(0, 0, 0, 0.12);
  @media (max-width: 777px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
const IMGMENUSTYLED = styled.img`
  display: none;
  @media (max-width: 777px) {
    display: block;
    margin-left: -350px;
  }
`
const IMGARROWSTYLED = styled.img`
  width: 12.25px;
  height: 12.25px;
`

const H1Styled = styled.h1`
  font-size: 18px;
  color: #000;
  text-decoration: none;
  display: flex;
  gap: 0.5em;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
`

const ContactListItem = styled.li`
  font-size: 18px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  @media (max-width: 777px) {
    display: none;
  }
`

const InputStyled = styled.input`
  width: 590px;
  height: 46px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
  border: 2px solid;
  border: 2px solid transparent;
  border-image-source: linear-gradient(
    96.78deg,
    #f64d4d -57.09%,
    #4d5ef6 101.17%
  );
  border-image-slice: 1;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  padding: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
  &::placeholder {
    font-family: Montserrat, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: normal;
  }
`

const SearchImgStyled = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`
const ImgStyled = styled.img`
  width: 20px;
  height: 10px;
`
const BUTTONSTYLED = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
  border-radius: 20px;
  width: 50px;
  height: 20px;
  padding: 15px;
  justify-content: center;
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  gap: 4px;
  cursor: pointer;
  border: none;
`
const LISTIMGSTYLED = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
`
const IMGSTYLEDWHATSAP = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
const LISTINPUTSTYLED = styled.li`
  position: relative;
  display: inline-block;
  max-width: 100%;
`
