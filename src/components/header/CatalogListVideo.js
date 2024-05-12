/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoArrowRight } from 'react-icons/go'
import styled from 'styled-components'
import { videoListCatalog } from '../../utils/constants/Url'

const CatalogListVideo = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('video')
  const [selectedCategoryState, setSelectedCategoryState] = useState('')
  const [hoveredCategory, setHoveredCategory] = useState('')
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }
  const handleCategoryClickState = (category) => {
    setSelectedCategoryState(category)
  }
  const handleCategoryMouseEnter = (category) => {
    setHoveredCategory(category)
  }

  const handleCategoryMouseLeave = () => {
    setHoveredCategory('')
  }
  return (
    <>
      <DIVMODALCLOSESTYLED>
        <AiOutlineCloseSquareStyled onClick={onClose} />
      </DIVMODALCLOSESTYLED>
      <CONTAINERDIVSTYLED>
        <ul>
          <DIVSTYLED>
            <LISTSTYLED>
              <span
                onMouseEnter={() => handleCategoryClick('video')}
                // onMouseLeave={() => handleCategoryClick('')}
                onClick={() => handleCategoryClick('video')}
              >
                Видеонаблюдение
              </span>
            </LISTSTYLED>
          </DIVSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('pcComponents')}
              onMouseEnter={() => handleCategoryClick('pcComponents')}
            >
              Системы доступа СКУД и Домофоны
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('peripherals')}
              onMouseEnter={() => handleCategoryClick('peripherals')}
            >
              Охранно-пожарные сигнализации
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('accessories')}
              onMouseEnter={() => handleCategoryClick('accessories')}
            >
              Мониторы
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('informationCarriers')}
              onMouseEnter={() => handleCategoryClick('informationCarriers')}
            >
              Сетевое оборудование
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('officeEquipment')}
              onMouseEnter={() => handleCategoryClick('officeEquipment')}
            >
              Источники питания
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('acoustics')}
              onMouseEnter={() => handleCategoryClick('acoustics')}
            >
              Кабели, шнуры, коннекторы
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('homeGadgets')}
              onMouseEnter={() => handleCategoryClick('homeGadgets')}
            >
              Программное обеспечение
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('powerProtection')}
              onMouseEnter={() => handleCategoryClick('powerProtection')}
            >
              Системы оповещения и звуковое оборудование
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span
              onClick={() => handleCategoryClick('batteries')}
              onMouseEnter={() => handleCategoryClick('batteries')}
            >
              Инструменты
            </span>
          </LISTSTYLED>
          <LISTSTYLED>
            <span>Проектное оборудование</span>
          </LISTSTYLED>
        </ul>
        <ul>
          {selectedCategory === 'video' && (
            <LISTYLED>
              {videoListCatalog?.map((element) => {
                return (element?.video || []).map((elem) => {
                  if (
                    elem.list === 'IP видеокамеры' ||
                    elem.list === 'Аналоговые видеокамеры' ||
                    elem.list === 'Аналоговые видеорегистраторы' ||
                    elem.list === 'Сетевые видеорегистраторы'
                  ) {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                      >
                        {elem.list}
                        {selectedCategoryState === elem.list &&
                          elem.videoList && (
                            <LISTITEMS>
                              {(elem.videoList || []).map((subElement) => (
                                <SPANLISTSTYLED key={subElement.list}>
                                  {subElement.list}
                                </SPANLISTSTYLED>
                              ))}
                            </LISTITEMS>
                          )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                        onMouseLeave={() => handleCategoryClickState('')}
                        more={elem.list === 'Больше Wi-Fi оборудование →'}
                      >
                        {elem.list}
                      </SPANSTYLED>
                    )
                  }
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'pcComponents' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.accessSystemsAndIntercoms || []).map(
                  (elem) => {
                    if (
                      elem.list === 'Домофоны' ||
                      elem.list === 'Системы доступа СКУД' ||
                      elem.list === 'SIGUR' ||
                      elem.list === 'Замки и доводчики'
                    ) {
                      return (
                        <SPANSTYLED
                          key={elem.list}
                          onClick={() => handleCategoryClickState(elem.list)}
                          onMouseEnter={() =>
                            handleCategoryClickState(elem.list)
                          }
                          onMouseLeave={() => handleCategoryClickState('')}
                        >
                          {elem.list}
                          {selectedCategoryState === elem.list &&
                            elem.access && (
                              <LISTITEMS>
                                {(elem.access || []).map((subElement) => (
                                  <SPANLISTSTYLED key={subElement.list}>
                                    {subElement.list}
                                  </SPANLISTSTYLED>
                                ))}
                              </LISTITEMS>
                            )}
                          <GoArrowRight />
                        </SPANSTYLED>
                      )
                      // eslint-disable-next-line no-else-return
                    } else {
                      return (
                        <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                      )
                    }
                  }
                )
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'peripherals' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.securityAndFireAlarms || []).map((elem) => {
                  if (
                    elem.list === 'AJAX - беспроводная сигнализация' ||
                    elem.list === 'Астра - сигнализация' ||
                    elem.list === 'Охранные извещатели датчики'
                  ) {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                        onMouseLeave={() => handleCategoryClickState('')}
                      >
                        {elem.list}
                        {selectedCategoryState === elem.list &&
                          elem.security && (
                            <LISTITEMS>
                              {(elem.security || []).map((subElement) => (
                                <SPANLISTSTYLED key={subElement.list}>
                                  {subElement.list}
                                </SPANLISTSTYLED>
                              ))}
                            </LISTITEMS>
                          )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                  }
                })
              })}
            </LISTYLED>
          )}

          {selectedCategory === 'accessories' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.monitors || []).map((elem) => {
                  if (
                    elem.list === 'Аксессуары для компьютерных устройств' ||
                    elem.list === 'Аксессуары для ноутбуков и планшетов' ||
                    elem.list === 'Аксессуары для мобильных устройств' ||
                    elem.list === 'Аксессуары для TV'
                  ) {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                        onMouseLeave={() => handleCategoryClickState('')}
                      >
                        {elem.list}
                        {selectedCategoryState === elem.list &&
                          elem.acoustics && (
                            <LISTITEMS>
                              {(elem.acoustics || []).map((subElement) => (
                                <SPANLISTSTYLED key={subElement.list}>
                                  {subElement.list}
                                </SPANLISTSTYLED>
                              ))}
                            </LISTITEMS>
                          )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                  }
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'informationCarriers' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.networkHardware || []).map((elem) => {
                  if (
                    elem.list === 'Коммутаторы PoE' ||
                    elem.list === 'Серверные шкафы'
                  ) {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                        onMouseLeave={() => handleCategoryClickState('')}
                      >
                        {elem.list}
                        {selectedCategoryState === elem.list &&
                          elem.network && (
                            <LISTITEMS>
                              {(elem.network || []).map((subElement) => (
                                <SPANLISTSTYLED key={subElement.list}>
                                  {subElement.list}
                                </SPANLISTSTYLED>
                              ))}
                            </LISTITEMS>
                          )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                  }
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'officeEquipment' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.powerSupplies || []).map((elem) => {
                  if (elem.list === 'Аккумуляторы') {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onClick={() => handleCategoryClickState(elem.list)}
                        onMouseEnter={() => handleCategoryClickState(elem.list)}
                        onMouseLeave={() => handleCategoryClickState('')}
                      >
                        {elem.list}
                        {selectedCategoryState === elem.list && elem.power && (
                          <LISTITEMS>
                            {(elem.power || []).map((subElement) => (
                              <SPANLISTSTYLED key={subElement.list}>
                                {subElement.list}
                              </SPANLISTSTYLED>
                            ))}
                          </LISTITEMS>
                        )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                  }
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'acoustics' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.powerSupplies || []).map((elem) => {
                  return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'homeGadgets' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.cablesCordsConnectors || []).map((elem) => {
                  return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'powerProtection' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.software || []).map((elem) => {
                  if (elem.list === 'UPS' || elem.list === 'Батарейки') {
                    return (
                      <SPANSTYLED
                        key={elem.list}
                        onMouseEnter={() => handleCategoryMouseEnter(elem.list)}
                        onMouseLeave={handleCategoryMouseLeave}
                      >
                        {elem.list}
                        {hoveredCategory === elem.list &&
                          elem.powerProtection && (
                            <LISTITEMS>
                              {(elem.powerProtection || []).map(
                                (subElement) => (
                                  <SPANLISTSTYLED key={subElement.list}>
                                    {subElement.list}
                                  </SPANLISTSTYLED>
                                )
                              )}
                            </LISTITEMS>
                          )}
                        <GoArrowRight />
                      </SPANSTYLED>
                    )
                    // eslint-disable-next-line no-else-return
                  } else {
                    return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                  }
                })
              })}
            </LISTYLED>
          )}
          {selectedCategory === 'batteries' && (
            <LISTYLED>
              {(videoListCatalog || []).map((element) => {
                return (element?.optionalEquipment || []).map((elem) => {
                  return <SPANSTYLED key={elem.list}>{elem.list}</SPANSTYLED>
                })
              })}
            </LISTYLED>
          )}
        </ul>
      </CONTAINERDIVSTYLED>
    </>
  )
}

export default CatalogListVideo

const DIVMODALCLOSESTYLED = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
const AiOutlineCloseSquareStyled = styled(AiOutlineCloseSquare)`
  color: red;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (max-width: 777px) {
    color: red;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`
const CONTAINERDIVSTYLED = styled.div`
  display: flex;
  width: 800px;
  @media (max-width: 777px) {
    width: 380px;
  }
  @media (max-width: 376px) {
    width: 100%;
    height: 100%;
  }
`
const LISTYLED = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 40px;
`
const SPANSTYLED = styled.span`
  color: ${(props) => (props.more === true ? 'blue' : '#555151')};
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`
const LISTSTYLED = styled.li`
  width: 100%;
  margin: 3px 0px 3px 0px;
  color: #000;
  padding: 14px 10px 10px;
  display: block;
  min-height: 46px;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  outline: none !important;
  outline: none;
  cursor: pointer;
  border-bottom: 0;
  -webkit-transition: all 150s;
  -moz-transition: all 150s;
  -o-transition: all 150s;
  transition: all 150s;
  & :hover {
    text-decoration: underline;
  }
  position: relative;
`
const DIVSTYLED = styled.div`
  display: flex;
`
const LISTITEMS = styled.li`
  position: absolute;
  top: 20px;
  right: -90px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid;
  color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  text-decoration: none o !important;
  & :hover {
    text-decoration: underline;
  }
  @media (max-width: 777px) {
    right: -20px;
  }
`
const SPANLISTSTYLED = styled.span`
  margin-bottom: 10px;
`
