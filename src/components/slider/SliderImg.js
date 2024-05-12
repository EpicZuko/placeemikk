/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'
import { slideProperties } from '../../utils/constants/Url'

const SliderImg = ({ images }) => {
  return (
    <DIV>
      <Slide {...slideProperties}>
        {images?.map((elem, index) => {
          return (
            <div className='each-slide-effect' key={index}>
              <div style={{ backgroundImage: `url(${elem})` }} />
            </div>
          )
        })}
      </Slide>
    </DIV>
  )
}

export default SliderImg

const DIV = styled.div`
  margin: 40px auto;
  z-index: 1000;
  width: 71%;
  height: 351px;
  gap: 0px;
  opacity: 0px;
  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
    border-radius: 10px;
  }

  .each-slide-effect span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`
