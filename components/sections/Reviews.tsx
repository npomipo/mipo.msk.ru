import stls from '@/styles/components/sections/Reviews.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CardReview from '@/components/cards/CardReview'
import maleStudent from '@/public/assets/imgs/general/male-student.jpg'
import femaleStudent from '@/public/assets/imgs/general/female-student.jpg'
import SwiperContainer from '@/components/general/SwiperContainer'
import classNames from 'classnames'

type ReviewsType = {
  standalone?: boolean
}

const Reviews = ({ standalone = false }: ReviewsType) => {
  const studentsReviews = [
    {
      title:
        'Как Иван выучился на Психолога и зарабатывает от 100 т.р. в месяц',
      name: 'Иван Иванов',
      occupation: 'Студент факультета семейной психологии',
      photo: maleStudent
    },
    {
      title:
        'Как Иван выучился на Психолога и зарабатывает от 100 т.р. в месяц',
      name: 'Иван Иванов',
      occupation: 'Студент факультета семейной психологии',
      photo: femaleStudent
    }
  ]

  const reviewsSlides = studentsReviews.map((review, idx) => (
    <CardReview
      key={review.name + idx}
      title={review.title}
      photo={review.photo}
      name={review.name}
      occupation={review.occupation}
    />
  ))

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <h2 className={stls.title}>Отзывы и статьи наших студентов</h2>
        <div className={stls.content}>
          <SwiperContainer slides={reviewsSlides} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
