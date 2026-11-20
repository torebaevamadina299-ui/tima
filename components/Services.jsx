const courses = [
  { title: 'Ағылшын тілі', text: 'Ағылшын тілінде сөйлеу, оқу және жазуды үйрену.' },
  { title: 'Математика', text: 'Математикалық есептерді шығару және логиканы дамыту.' },
  { title: 'Бағдарламалау', text: 'Python тілінің негіздерімен және веб-сайт жасаумен танысу.' },
  { title: 'ҰБТ дайындығы', text: 'ҰБТ пәндерін қайталау және тест тапсырмаларын орындау.' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h2>Біздің курстар</h2>
        <p className="section-intro">Оқу орталығында төмендегі бағыттар бойынша сабақтар бар:</p>
        <div className="course-list">
          {courses.map((course, index) => (
            <div className="course" key={course.title}>
              <span className="course-number">{index + 1}</span>
              <div><h3>{course.title}</h3><p>{course.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}