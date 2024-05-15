/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import styled from 'styled-components'

const CardWishList = ({ dataArray }) => {
  const initialLikesState = dataArray.reduce((acc, item) => {
    acc[item.id] = false
    return acc
  }, {})

  const [likes, setLikes] = useState(initialLikesState)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 12

  const startIndex = (currentPage - 1) * perPage
  const endIndex = startIndex + perPage

  const currentData = dataArray?.slice(startIndex, endIndex)

  const totalPages = Math.ceil(dataArray.length / perPage)

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleLikeClick = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }))
  }

  return (
    <div>
      <DIVCARDWISHSTYLED>
        {currentData?.map((element) => {
          return (
            <CARDWISHLISTCONTAINERSTYLED key={element.id}>
              <IMGSTYLED src={element.wishlist} alt='' />
              <TEXTSTYLED>{element.title}</TEXTSTYLED>
              <PRICESTYLED>{element.price} c.</PRICESTYLED>
              <IMGLIKESTYLED
                onClick={() => handleLikeClick(element.id)}
                src={likes[element.id] ? 'likeYes' : 'likeNot'}
                alt=''
              />
            </CARDWISHLISTCONTAINERSTYLED>
          )
        })}
      </DIVCARDWISHSTYLED>

      <DIVPREVNEXTSTYLED>
        <BUTTONSTYLED onClick={handlePrevClick}>
          <HiArrowLongLeft /> Назад
        </BUTTONSTYLED>
        <SPANPAGESTYLED>
          Страница {currentPage} из {totalPages}
        </SPANPAGESTYLED>
        <BUTTONSTYLED onClick={handleNextClick}>
          Вперед
          <HiArrowLongRight />
        </BUTTONSTYLED>
      </DIVPREVNEXTSTYLED>
    </div>
  )
}

export default CardWishList

const CARDWISHLISTCONTAINERSTYLED = styled.div`
  width: 320px;
  height: auto;
  gap: 0px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.12);
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

const IMGSTYLED = styled.img`
  width: 300px;
  height: 300px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 19px;
  padding: 20px 10px;
`

const TEXTSTYLED = styled.p`
  padding-left: 10px;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
  border-bottom: 0;
  transition: all 150ms;
  color: #1a1a1a;
  display: inline-block;
  overflow: hidden;
  padding-top: 5px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  height: 50px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
`

const PRICESTYLED = styled.span`
  -webkit-text-size-adjust: 100%;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  text-align: left;
  word-break: break-all;
  color: #0060ce;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 27px;
`

const IMGLIKESTYLED = styled.img`
  margin-left: 160px;
`

const DIVCARDWISHSTYLED = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  margin: 0px auto;
  gap: 40px;
`
const DIVPREVNEXTSTYLED = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 54px;
  margin-bottom: 54px;
  @media (max-width: 777px) {
    margin-bottom: 154px;
  }
`
const SPANPAGESTYLED = styled.span`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  outline: none !important;
  cursor: pointer;
  border-bottom: 0;
  display: inline-block;
  padding: 3px 7px;
  min-width: 12px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 200ms;
  color: #959595;
`
const BUTTONSTYLED = styled.button`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border: none;
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  outline: none !important;
  cursor: pointer;
  border-bottom: 0;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  transition: all 200ms;
  margin: 0 4px;
  padding: 5px 7px;
  width: auto;
  color: #959595;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
    background-color: #555151;
  }
`
