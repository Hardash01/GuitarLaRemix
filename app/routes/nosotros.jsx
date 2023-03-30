import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return{
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Ventas de Guitarras, Blog de musica'
  }
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
            <img src={imagen} alt="Imagen sobre nosotros" />
            <div>
              <p>
              Nunc convallis nulla ac urna porta euismod. Ut eget est malesuada, iaculis elit non, hendrerit eros. Etiam a leo eu orci viverra fringilla. Mauris mollis tincidunt libero. Proin lacinia orci felis, vel tristique erat consequat eget. Ut viverra magna in hendrerit eleifend. Nunc dictum venenatis ipsum, quis viverra tortor porttitor at.
              </p>
              <p>
              Nunc convallis nulla ac urna porta euismod. Ut eget est malesuada, iaculis elit non, hendrerit eros. Etiam a leo eu orci viverra fringilla. Mauris mollis tincidunt libero. Proin lacinia orci felis, vel tristique erat consequat eget. Ut viverra magna in hendrerit eleifend. Nunc dictum venenatis ipsum, quis viverra tortor porttitor at.
              </p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros