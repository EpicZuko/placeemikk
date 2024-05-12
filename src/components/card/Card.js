/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { responsive } from '../../utils/constants/Url'
import CardSaleSliderImg from './CardSaleSliderImg'
// eslint-disable-next-line import/order
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CardSale = ({ array }) => {
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
        {array?.map((element) => (
          <CardSaleStyled key={element?.id}>
            {element.discounts && (
              <SPANDISCOUNTSTYLED>-{element?.discounts}</SPANDISCOUNTSTYLED>
            )}
            <CardSaleSliderImg img={element?.img} id={element?.id} />
            <PRICESTYLED
              id={element?.id}
              discountamount={element?.discountAmount}
            >
              {element?.price} с
              {element?.discountAmount && (
                <PRICESTYLEDIV>{element?.discountAmount} с</PRICESTYLEDIV>
              )}
            </PRICESTYLED>
            {element?.textSmaller && (
              <TEXTMSTYLED>{element?.textSmaller}</TEXTMSTYLED>
            )}
            {element?.text && <TEXTSTYLED>{element?.text}</TEXTSTYLED>}
          </CardSaleStyled>
        ))}
      </Carousel>
    </DIVCONTAINERCARDSLIDER>
  )
}

export default CardSale

const DIVCONTAINERCARDSLIDER = styled.div`
  width: 74%;
  margin: 100px auto;
  z-index: 1000;
  gap: 0px;
  padding-left: 10px;
  & .react-multiple-carousel__arrow--left {
    background: #c0c0c0;
    border-radius: 0px;
    min-width: 33px;
    min-height: 33px;
    left: calc(0.8% + 1px);
    @media (max-width: 777px) {
      left: calc(0% + 1px);
    }
  }
  & .react-multiple-carousel__arrow--right {
    background: #c0c0c0;
    border-radius: 0px;
    width: 20px;
    right: calc(1.5% + 1px);
    min-width: 33px;
    min-height: 33px;
    @media (max-width: 777px) {
      right: calc(0% + 1px);
    }
  }
`

const CardSaleStyled = styled.div`
  width: 250px;
  height: auto;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  opacity: 0px;
  background: rgba(255, 255, 255, 1);
  padding: 0px 10px;
  padding-bottom: 20px;
  margin-left: 10px;
`
const SPANDISCOUNTSTYLED = styled.span`
  z-index: 900;
  position: relative;
  width: 32px;
  height: 16px;
  top: 24px;
  left: 180px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  line-height: 11.72px;
  border: 1px solid rgba(255, 67, 67, 1);
  border-radius: 10px;
  padding: 2px 6px;
`

const PRICESTYLED = styled.h4`
  height: 16px;
  gap: 14px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  text-align: left;
  color: ${(props) => props.discountamount && 'rgba(255, 67, 67, 1)'};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const PRICESTYLEDIV = styled.div`
  padding: 0px;
  margin: 0px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: left;
  width: 35px;
  height: 12px;
  gap: 0px;
  color: rgba(70, 70, 70, 0.55);
  opacity: 0px;
  position: relative;
  border: 1px solid transparent;
  overflow: hidden;
  width: 35px;
  height: 12px;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 67, 67, 1);
    border-left: none;
    transform-origin: top left;
    transform: rotate(-5.17deg);
  }
`
const TEXTSTYLED = styled.p`
  gap: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.9px;
  text-align: left;
  opacity: 0px;
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
  margin-bottom: 10px;
`
const TEXTMSTYLED = styled.h2`
  width: 55px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
`
