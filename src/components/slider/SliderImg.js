/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'
import { slideProperties } from '../../utils/constants/Url'

const SliderImg = () => {
  const images = [
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  ]
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
  @media (max-width: 1024px) {
    width: 86%;
    margin: 30px auto;
  }
`
