import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import katalogicon from '../../assets/img/catalogmenu.svg'
import glavaiicon from '../../assets/img/glavnai.svg'
import soobsheinicon from '../../assets/img/soobsheni.svg'
import { arrayCatalog } from '../../utils/constants/Url'

const Catalog = () => {
  return (
    <>
      <DIVCONATAINER>
        {arrayCatalog.map((elem) => {
          return (
            <BUTTONSTYLED variant={elem.variant}>
              <DIVIMGCONTAINER>
                <img src={elem.img} alt='' />
                <h3>{elem.text}</h3>
              </DIVIMGCONTAINER>
            </BUTTONSTYLED>
          )
        })}
      </DIVCONATAINER>
      <DIVMEDIAFIXEDSTYLED>
        <DIVMEDIASTYLED>
          <div>
            <img src={katalogicon} alt='католог' />
            <H4STYLED>Католог</H4STYLED>
          </div>
          <div>
            <img src={glavaiicon} alt='главная' />
            <H4STYLED>Главная</H4STYLED>
          </div>
          <div>
            <img src={soobsheinicon} alt='контакты' />
            <H4STYLED>Контакты</H4STYLED>
          </div>
        </DIVMEDIASTYLED>
      </DIVMEDIAFIXEDSTYLED>
    </>
  )
}

export default Catalog

const DIVCONATAINER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  background: #f5f5f5;
  margin: 0px;
  padding: 10px;
  @media (max-width: 777px) {
    display: none;
  }
`
const DIVIMGCONTAINER = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const BUTTONSTYLED = styled.button`
  display: flex;
  align-items: center;
  width: 210px;
  text-align: center;
  padding: 14px 0px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === 'blue' ? '#0060ce' : '#fff'};
  padding-left: 20px;
  border: none;
  color: ${(props) => (props.variant === 'blue' ? '#fff' : '#888')};
  font-family: sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant === 'blue' ? '#0060ce' : '#dfdfdf'};
  }
`
const DIVMEDIAFIXEDSTYLED = styled.div`
  display: none;
  @media (max-width: 777px) {
    display: block;
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
`
const DIVMEDIASTYLED = styled.div`
  display: none;
  @media (max-width: 777px) {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 23.58px 0px rgba(0, 0, 0, 0.12);
    padding: 20px;
    gap: 100px;
  }
`
const H4STYLED = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: block;
  color: #8c8c8c;
`
