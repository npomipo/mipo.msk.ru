import stls from '@/styles/components/general/ProgramType.module.sass'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import {
  routeProfessions,
  routeCourses,
  routePrograms,
  routeMBA
} from '@/data/routes'

const ProgramType = ({ close = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <div className={stls.container}>
      <p className={stls.p}>Тип обучения:</p>

      <Link href={`${routePrograms}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={classNames({
              [stls.circle]: true,
              [stls.active]: curProgramsType === null
            })}></div>{' '}
          <span className={stls.text}>Любой</span>
        </a>
      </Link>

      <Link href={`${routeProfessions}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={classNames({
              [stls.circle]: true,
              [stls.active]: curProgramsType === 'profession'
            })}></div>
          <span className={stls.text}>Профессиональная переподготовка</span>
        </a>
      </Link>

      <Link href={`${routeCourses}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={classNames({
              [stls.circle]: true,
              [stls.active]: curProgramsType === 'course'
            })}></div>
          <span className={stls.text}>Повышение квалификации</span>
        </a>
      </Link>

      <Link href={`${routeMBA}/${slug}`}>
        <a className={stls.item} onClick={close && close}>
          <div
            className={classNames({
              [stls.circle]: true,
              [stls.active]: curProgramsType === 'mba'
            })}></div>
          <span className={stls.text}>MBA</span>
        </a>
      </Link>
    </div>
  )
}

export default ProgramType
