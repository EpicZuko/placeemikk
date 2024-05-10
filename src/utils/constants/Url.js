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
export const arrayListCatalog = [
  {
    listArrayWifi: [
      {
        list: 'Wi-Fi роутеры',
        listWifi: [
          {
            list: 'Все роутеры',
          },
          {
            list: 'Wi-Fi 4 (802.11n)',
          },
          {
            list: 'Wi-Fi 5 (801.11ac)',
          },
          {
            list: 'Wi-Fi 6 (802.11ax)',
          },
        ],
      },
      {
        list: 'Wi-Fi 4G маршрутизаторы',
        listWifi: [
          { list: 'С поддержкой модема' },
          { list: 'С поддержкой сим карты' },
        ],
      },
      {
        list: 'Wi-Fi Mesh системы',
      },
      {
        list: 'Wi-Fi точки доступа и репитеры',
      },
      {
        list: 'Wi-Fi адаптеры',
      },
      {
        list: 'Сетевые коммутаторы',
      },
      {
        list: 'Медиаконвертеры и SFP модули',
      },
      {
        list: 'Умные розетки',
      },
      {
        list: 'Powerline Ethernet адаптеры',
      },
      {
        list: 'Больше Wi-Fi оборудование →',
      },
    ],
  },
  {
    listArrayPcComponents: [
      {
        list: 'Материнские платы',
        listPc: [
          {
            list: 'Intel LGA 1700',
          },
          {
            list: 'Intel LGA 1200',
          },
        ],
      },
      {
        list: 'Процессоры',
        listPc: [
          {
            list: 'Intel LGA 1700',
          },
          { list: ' Intel LGA 1200' },
        ],
      },
      {
        list: 'Видеокарты',
      },
      {
        list: 'Оперативная память',
      },
      {
        list: 'Блоки питания',
      },
      {
        list: 'Накопители данных',
        listPc: [
          {
            list: 'SSD 2.5"',
          },
          {
            list: 'SSD M.2',
          },
          {
            list: 'Внешние SSD',
          },
          {
            list: 'HDD',
          },
        ],
      },

      {
        list: 'Системы охлаждения',
        listPc: [
          {
            list: 'Кулеры для процессоров',
          },
          {
            list: 'Вентиляторы для корпусов',
          },
          {
            list: 'Система жидкостного охлаждения',
          },
          {
            list: 'Аксессуары',
          },
        ],
      },
      {
        list: 'Корпуса для ПК',
      },
    ],
  },
  {
    listArrayPeripherals: [
      {
        list: 'Мониторы',
        listPeripherls: [
          {
            list: 'Мониторы Philips',
          },
          {
            list: 'Мониторы Dahua',
          },
        ],
      },
      {
        list: 'Моноблоки ASUS',
      },
      {
        list: 'Клавиатуры',
        listPeripherls: [
          {
            list: 'Офисные',
          },
          {
            list: 'Игровые',
          },
          {
            list: 'Комплекты клавиатура+мышь',
          },
        ],
      },
      {
        list: 'Мышки',
        listPeripherls: [
          {
            list: 'Офисные',
          },
          {
            list: 'Игровые',
          },
        ],
      },
      {
        list: 'Коврики',
      },
      {
        list: 'Игровые контроллеры',
      },
      {
        list: 'WEB камеры',
      },
      {
        list: 'Наушники',
        listPeripherls: [
          {
            list: 'Игровые наушники',
          },
          {
            list: 'Накладные наушники',
          },
          {
            list: 'Внутриканальные наушники',
          },
        ],
      },
      {
        list: 'Игровые кресла',
      },
    ],
  },
  {
    AccessoriesArray: [
      {
        list: 'Аксессуары для компьютерных устройств',
        acoustics: [
          {
            list: 'Адаптеры, переходники и преобразователи',
          },
          {
            list: 'Шлейфы и кабели',
          },
          {
            list: 'USB Хабы',
          },
          {
            list: 'Кард-ридеры',
          },
          {
            list: 'Микрофоны',
          },
          {
            list: 'Сетевые фильтры',
          },
          {
            list: 'Удлинители электрические',
          },
          {
            list: 'Вилки, тройники',
          },
          {
            list: 'KVM и USB коммутаторы',
          },
          {
            list: 'Разное',
          },
          {
            list: 'Больше →',
          },
        ],
      },
      {
        list: 'Аксессуары для ноутбуков и планшетов',
        acoustics: [
          {
            list: 'Блоки питания',
          },
          {
            list: 'Наклейки на клавиатуру',
          },
          {
            list: 'Чистящие средства',
          },
          {
            list: 'Системы охлаждения',
          },
          {
            list: 'Сумки и чехлы',
          },
          {
            list: 'Подставки для устройств',
          },
        ],
      },
      {
        list: 'Аксессуары для мобильных устройств',
        acoustics: [
          {
            list: 'Зарядные устройства для смартфонов',
          },
          {
            list: 'POWER BANK',
          },
          {
            list: 'Зарядные устройства от прикуривателя',
          },
          {
            list: 'Кабели и переходники',
          },
          {
            list: 'Bluetooth гарнитура',
          },
          {
            list: 'Держатели для планшетов',
          },
        ],
      },
      {
        list: 'Аксессуары для TV',
        acoustics: [
          {
            list: 'Крепления для ТВ и LCD мониторов',
          },
          {
            list: 'VGA HDMI сплиттеры',
          },
        ],
      },
    ],
  },
  {
    informationCarriers: [
      {
        list: 'USB накопители',
        informationCarriers: [
          {
            list: 'Флеш накопители 8GB',
          },
          {
            list: 'Флеш накопители 16GB',
          },
          {
            list: 'Флеш накопители 32GB',
          },
          {
            list: 'Флеш накопители 64GB',
          },
          {
            list: 'Флеш накопители 128 GB',
          },
          {
            list: 'Флэш накопители 256 GB',
          },
        ],
      },
      {
        list: 'Micro SD',

        informationCarriers: [
          {
            list: 'micro SD накопители 8 GB',
          },
          {
            list: 'micro SD накопители 16GB',
          },
          {
            list: 'micro SD накопители 32GB',
          },
          {
            list: 'micro SD накопители 64 GB',
          },
          {
            list: 'micro SD накопители 128 GB',
          },
          {
            list: 'micro SD накопители 256 GB',
          },
        ],
      },
      {
        list: 'SD',

        informationCarriers: [
          {
            list: 'SD накопители 16 GB',
          },
          {
            list: 'SD накопители 32 GB',
          },
          {
            list: 'SD накопители 64 GB',
          },
          {
            list: 'SD накопители 128 GB',
          },
        ],
      },
      {
        list: 'Внешние жёсткие диски',

        informationCarriers: [
          {
            list: 'Внешние жесткие диски 1TB',
          },
          {
            list: 'Внешние жесткие диски 2TB',
          },
          {
            list: 'Внешние жесткие диски 4TB и более',
          },
        ],
      },
      {
        list: 'SSD диски',

        informationCarriers: [
          {
            list: 'Внешние SSD',
          },
          {
            list: 'Внутренние SSD',
          },
          {
            list: 'Аксессуары',
          },
        ],
      },
      {
        list: 'Кейсы для жестких дисков',
      },
    ],
  },
  {
    officeEquipment: [
      {
        list: 'Принтеры. МФУ.',
      },
      {
        list: 'Сканеры',
      },
      {
        list: 'Картриджи и расходные материалы',
      },
    ],
  },
  {
    acoustics: [
      {
        list: 'Портативная акустика',
      },
      {
        list: 'Акустика 2.0',
      },
      {
        list: 'Акустика 2.1',
      },
    ],
  },
  {
    homeGadgets: [
      {
        list: 'Умный дом IMOU',
      },
      {
        list: 'Умный дом TP-Link',
      },
    ],
  },
  {
    powerProtection: [
      {
        list: 'UPS',

        powerProtection: [
          {
            list: ' UPS On-Line',
          },
          {
            list: 'Линейно-интерактивные',
          },
        ],
      },
      {
        list: 'Батарейки',

        powerProtection: [
          {
            list: 'Батарейки Silver Oxide',
          },
          {
            list: 'Батарейки солевые',
          },
          {
            list: 'Батарейки литиевые',
          },
          {
            list: 'Батарейки щелочные (ALKALINE)',
          },
          {
            list: 'Батарейки цинковые',
          },
          {
            list: 'Батарейки никель-металлгидридные',
          },
        ],
      },
      {
        list: 'Инверторы',
      },
      {
        list: 'Конвертеры',
      },
      {
        list: 'Сетевые фильтры',
      },
      {
        list: 'Стабилизаторы',
      },
    ],
  },
  {
    batteries: [
      {
        list: 'Security Force',
      },
      {
        list: 'Matrix',
      },
      {
        list: 'Прочие',
      },
    ],
  },
]
