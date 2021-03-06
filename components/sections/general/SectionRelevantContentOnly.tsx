import stls from '@/styles/components/sections/general/SectionRelevantContentOnly.module.sass'
import { TPropClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import { ImgSectionRelevantContentOnlyImages } from '@/components/imgs'
import { IconGeneralCircleCheckAlt } from '@/components/icons'

type TSectionRelevantContentOnly = TPropClassNames

const SectionRelevantContentOnly = ({
  classNames
}: TSectionRelevantContentOnly) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  const atMba = program?.category?.type === 'mba'

  const listDynamic =
    program?.SectionRelevantContentOnly &&
    program?.SectionRelevantContentOnly?.length > 0
      ? program?.SectionRelevantContentOnly.map(item => item?.item).filter(
          item => item
        )
      : null

  const list =
    listDynamic ||
    (atMba
      ? [
          'Мы постоянно проводим внутренние исследования, на основе которых обновляем наши программы',

          'При составлении программ используем опыт лучших бизнес-школ со всего мира',

          'Программа разработана специально в онлайн-формате для предпринимателей и руководителей, которые ценят свое время и хотят пройти обучение без отрыва от работы',

          'Благодаря дистанционному формату обучения, мы смогли собрать экспертов российских и зарубежных бизнес-школ'
        ]
      : [
          'Мы постоянно проводим внутренние исследования, на основе которых обновляем наши программы и актуализируем образовательный контент',
          'При составлении программ используем опыт лучших экспертов своего дела со всего мира',
          'Программа разработана специально в онлайн-формате для специалистов и руководителей, которые ценят свое время и хотят пройти обучение без отрыва от работы',
          'Благодаря дистанционному формату обучения, мы смогли собрать экспертов российского и зарубежного рынка'
        ])
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Только актуальный контент</h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <ul className={stls.list}>
              {list.map((item, idx) => (
                <li key={`${item}-${idx}`} className={stls.listItem}>
                  <IconGeneralCircleCheckAlt
                    classNames={[stls.IconGeneralCircleCheckAlt]}
                  />
                  <p className={stls.p}>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <ImgSectionRelevantContentOnlyImages />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionRelevantContentOnly
