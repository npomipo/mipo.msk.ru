import stls from '@/styles/components/imgs/diplomas/ImgDiplomaTemplate.module.sass'
import { TypeImg } from '@/types/index'
import { useContext } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import programContext from '@/context/program/programContext'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/diplomas/diploma.jpg'

const ImgDiplomaTemplate = ({ classNames = [], width, height }: TypeImg) => {
  const { program } = useContext(programContext)

  const now = new Date()
  const studyPeriod = Number(program?.timenprice?.[0]?.studyMonthsDuration) || 6
  const programName =
    program?.title?.replace(/,/g, encodeURIComponent(',')) ||
    'Наименование программы'
  const qualification = program?.qualification || 'Присваемая квалификация'

  const src = `https://res.cloudinary.com/mipo-msk-ru/image/upload/l_text:${encodeURIComponent(
    'PT Serif'
  )}_24_center:${encodeURIComponent(
    'Иванов Иван Иванович'
  )},x_283,y_120,g_north/l_text:${encodeURIComponent(
    'EB Garamond'
  )}_16_center:${encodeURIComponent(
    'за время обучения в период'
  )},x_283,y_145,g_north/w_410,c_fit,l_text:${encodeURIComponent(
    'PT Serif'
  )}_16_center:${encodeURIComponent(
    `${format(
      new Date(now.getFullYear(), now.getMonth() - studyPeriod, now.getDate()),
      'с dd LLLL yyyy',
      { locale: ru }
    )
      .replace('январь', 'января')
      .replace('февраль', 'февраля')
      .replace('март', 'марта')
      .replace('апрель', 'апреля')
      .replace('май', 'мая')
      .replace('июнь', 'июня')
      .replace('июль', 'июля')
      .replace('август', 'августа')
      .replace('сентябрь', 'сентября')
      .replace('октябрь', 'октября')
      .replace('ноябрь', 'ноября')} года ${format(now, 'по dd LLLL yyyy', {
      locale: ru
    })
      .replace('январь', 'января')
      .replace('февраль', 'февраля')
      .replace('март', 'марта')
      .replace('апрель', 'апреля')
      .replace('май', 'мая')
      .replace('июнь', 'июня')
      .replace('июль', 'июля')
      .replace('август', 'августа')
      .replace('сентябрь', 'сентября')
      .replace('октябрь', 'октября')
      .replace(
        'ноябрь',
        'ноября'
      )} года \n\n прошел профессиональную переподготовку в Научной автономной некоммерческой организации «Институт профессионального образования» \n\n по программе «${programName}» \n\n Решением \n от ${format(
      new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2),
      'dd.MM.yyyy',
      { locale: ru }
    )}${encodeURIComponent(
      ','
    )} протокол 0000 \n\n Диплом предоставляет право на ведение профессиональной деятельности в сфере`
  )},x_283,y_169,g_north/w_410,c_fit,l_text:${encodeURIComponent(
    'PT Serif'
  )}_24_center:${encodeURIComponent(
    `«${programName}»`
  )},x_283,y_475,g_north/l_text:${encodeURIComponent(
    'PT Serif'
  )}_16_center:${encodeURIComponent(
    'и подтверждает присвоение квалификации'
  )},x_283,y_510,g_north/w_410,c_fit,l_text:${encodeURIComponent(
    'PT Serif'
  )}_24_center:${encodeURIComponent(
    `${qualification}`
  )},x_283,y_540,g_north/diploma_template_806d8478b8.jpg`

  console.log(src)

  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt='Диплом МИПО'
      width={width || 1131}
      height={height || 800}
    />
  )
}

export default ImgDiplomaTemplate
