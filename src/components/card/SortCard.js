import React, { useState } from 'react'
import styled from 'styled-components'

const SortCard = ({ items, setItems, setPageSize }) => {
  const [sortOption, setSortOption] = useState('')
  const [pageSize, setPageSizeLocal] = useState(12)

  const handleSortChange = (e) => {
    const { value } = e.target
    setSortOption(value)

    let sortedItems
    switch (value) {
      case 'newest':
        sortedItems = [...items].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
        break
      case 'alpha-asc':
        sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'alpha-desc':
        sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'price-asc':
        sortedItems = [...items].sort((a, b) => a.price - b.price)
        break
      case 'popularity':
        sortedItems = [...items].sort((a, b) => b.popularity - a.popularity)
        break
      default:
        sortedItems = items
        break
    }
    setItems(sortedItems)
  }

  const handlePageSizeChange = (e) => {
    const value = parseInt(e.target.value, 10)
    setPageSizeLocal(value)
    setPageSize(value)
  }

  return (
    <SortContainerStyled>
      <SelectStyled value={sortOption} onChange={handleSortChange}>
        <option value='newest'>Сортировать по времени: новинки выше</option>
        <option value='alpha-asc'>Сортировать по алфавиту: от А до Я</option>
        <option value='alpha-desc'>Сортировать по алфавиту: от Я до А</option>
        <option value='price-asc'>Сортировать по цене: дешевые выше</option>
        <option value='popularity'>
          Сортировать по популярности: по убыванию
        </option>
      </SelectStyled>
      <SelectStyled value={pageSize} onChange={handlePageSizeChange}>
        <option value={12}>12 На страницу</option>
        <option value={24}>24 На страницу</option>
        <option value={48}>48 На страницу</option>
        <option value={96}>96 На страницу</option>
      </SelectStyled>
    </SortContainerStyled>
  )
}

export default SortCard

const SortContainerStyled = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #555151;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  padding: 7px;
  border-radius: 10px;
  background: #fff;
  box-sizing: border-box;
  width: 63.9%;
  margin: 0px auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
`
const SelectStyled = styled.select`
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
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  margin: 10px;
`
