/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'
import { slideProperties } from '../../utils/constants/Url'

const CardSaleSliderImg = ({ img, id }) => {
  return (
    <DIVSTYLED>
      <Slide {...slideProperties} arrows={false}>
        {Array.isArray(img) ? (
          img.map((elem) => (
            <div className='each-slide-effect' key={id}>
              <div style={{ backgroundImage: `url(${elem})` }} />
            </div>
          ))
        ) : (
          <div
            className='each-slide-effect'
            style={{ backgroundImage: `url(${img})` }}
          />
        )}
      </Slide>
    </DIVSTYLED>
  )
}

export default CardSaleSliderImg

const DIVSTYLED = styled.div`
  z-index: 1000;
  @media (max-width: 777px) {
    padding-right: 0px;
  }
  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 200px;
    border-radius: 10px;
  }

  .each-slide-effect span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`
