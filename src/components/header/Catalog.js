/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { CgScreen } from 'react-icons/cg'
import styled from 'styled-components'
import katalogicon from '../../assets/img/catalogmenu.svg'
import device from '../../assets/img/device.svg'
import glavaiicon from '../../assets/img/glavnai.svg'
import menuicons from '../../assets/img/menucatalog.svg'
import pinDrop from '../../assets/img/pindrop.svg'
import soobsheinicon from '../../assets/img/soobsheni.svg'
import video from '../../assets/img/video.svg'
import Modal from '../modal/Modal'
import CatalogList from './CatalogList'
import CatalogListVideo from './CatalogListVideo'

const Catalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCatalog, setSelectedCatalog] = useState('catalog')
  const [selectedCategory, setSelectedCategory] = useState('device')

  const openModal = (catalog) => {
    setSelectedCatalog(catalog)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCatalog(selectedCatalog)
    setIsModalOpen(false)
  }
  return (
    <>
      <DIVCONATAINER>
        <div>
          <BUTTONSTYLED onClick={() => setIsModalOpen(true)} variant='blue'>
            <DIVIMGCONTAINER>
              <img src={menuicons} alt='' />
              <h3>Каталог</h3>
            </DIVIMGCONTAINER>
          </BUTTONSTYLED>
        </div>
        <div role='button' onClick={() => setSelectedCatalog('catalog')}>
          <BUTTONSTYLED
            active={selectedCategory === 'device'}
            onClick={() => setSelectedCategory('device')}
          >
            <DIVIMGCONTAINER>
              <img src={device} alt='' />
              <h3>Комплектующие ПК</h3>
            </DIVIMGCONTAINER>
          </BUTTONSTYLED>
        </div>

        <div role='button' onClick={() => setSelectedCatalog(null)}>
          <BUTTONSTYLED
            active={selectedCategory === 'video'}
            onClick={() => setSelectedCategory('video')}
          >
            <DIVIMGCONTAINER>
              <img src={video} alt='' />
              <h3>Видеонаблюдение</h3>
            </DIVIMGCONTAINER>
          </BUTTONSTYLED>
        </div>
        <div>
          <BUTTONSTYLED>
            <DIVIMGCONTAINER>
              <ImgIconsStyledCgScreen />
              <h3>Комплектующие ТВ</h3>
            </DIVIMGCONTAINER>
          </BUTTONSTYLED>
        </div>
        <div>
          <BUTTONSTYLED>
            <DIVIMGCONTAINER>
              <img src={pinDrop} alt='' />
              <h3>Где купить?</h3>
            </DIVIMGCONTAINER>
          </BUTTONSTYLED>
        </div>
      </DIVCONATAINER>
      <DIVMEDIAFIXEDSTYLED>
        <DIVMEDIASTYLED>
          <div role='button' onClick={() => openModal('catalog')}>
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          {selectedCatalog === 'catalog' ? (
            <CatalogList onClose={closeModal} />
          ) : (
            <CatalogListVideo onClose={closeModal} />
          )}
        </Modal>
      )}
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
  @media (max-width: 1024px) {
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
    // eslint-disable-next-line no-nested-ternary
    props.active ? '#dfdfdf' : props.variant === 'blue' ? '#0060ce' : '#fff'};
  padding-left: 20px;
  border: none;
  color: ${(props) => (props.variant === 'blue' ? '#fff' : '#888')};
  font-family: sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`
const DIVMEDIAFIXEDSTYLED = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 1000;
  }
`
const DIVMEDIASTYLED = styled.div`
  display: none;
  @media (max-width: 1024px) {
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
const ImgIconsStyledCgScreen = styled(CgScreen)`
  width: 20px;
  height: 20px;
`
