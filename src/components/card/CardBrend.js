/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { responsive } from '../../utils/constants/Url'
// eslint-disable-next-line import/order
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CardBrend = ({ arrayCardBrend }) => {
  return (
    <DIVCONTAINERCARDSLIDER>
      <Carousel
        responsive={responsive}
        // eslint-disable-next-line react/jsx-boolean-value
        autoPlay={true}
        autoPlaySpeed={8000}
        // eslint-disable-next-line react/jsx-boolean-value
        infinite={true}
      >
        {arrayCardBrend?.map((element) => {
          return (
            <BUTTONSTYLED>
              <IMGSTYLED src={element?.img} alt='brend' />
            </BUTTONSTYLED>
          )
        })}
      </Carousel>
    </DIVCONTAINERCARDSLIDER>
  )
}

export default CardBrend

const DIVCONTAINERCARDSLIDER = styled.div`
  width: 72%;
  margin: 100px auto;
  z-index: 900;
  gap: 0px;
  & .react-multiple-carousel__arrow--left {
    background: #c0c0c0;
    border-radius: 0px;
    min-width: 23px;
    min-height: 23px;
    z-index: 900;

    left: calc(0% + 1px);
    @media (max-width: 777px) {
      left: calc(0% + 1px);
    }
  }
  & .react-multiple-carousel__arrow--right {
    background: #c0c0c0;
    border-radius: 0px;
    width: 20px;
    right: calc(0% + 1px);
    min-width: 23px;
    z-index: 900;
    min-height: 23px;
    @media (max-width: 777px) {
      right: calc(0% + 1px);
    }
  }
`
const BUTTONSTYLED = styled.button`
  width: 270px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid #e1e1e1;
  flex-basis: 100%;
  border-radius: 15px;
  background-color: #fff;
`
const IMGSTYLED = styled.img`
  max-width: 100%;
  height: 70px;
  vertical-align: middle;
  font-size: 0;
`
