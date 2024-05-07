import device from '../../assets/img/device.svg'
import menuicons from '../../assets/img/menucatalog.svg'
import pinDrop from '../../assets/img/pindrop.svg'
import video from '../../assets/img/video.svg'

export const urlKyrgyztanIcons =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png'
export const arrayCatalog = [
  {
    img: menuicons,
    text: 'Каталог',
    variant: 'blue',
  },
  {
    img: device,
    text: 'Комплектующие ПК',
  },
  {
    img: video,
    text: 'Видеонаблюдение',
  },
  {
    img: pinDrop,
    text: 'Где купить?',
  },
  {
    img: pinDrop,
    text: 'Где купить?',
  },
]
export const slideProperties = {
  duration: 1500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
}
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
