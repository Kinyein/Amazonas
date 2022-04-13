import Aos from 'aos'
import 'aos/dist/aos.css';
import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { Link } from 'react-router-dom'
import { CardProduct, CardsContainer } from '../styles/listStyle'

const ListProduct = () => {

  Aos.init();

  return (
    <CardsContainer>
      <div data-aos="fade-up">
        <CardProduct>
          <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg" />

          <div>
            <h4>TitleProduct</h4>
            <p>PriceProduct</p>
          </div>
        </CardProduct>
      </div>
      <div data-aos="fade-up">
        <CardProduct>
          <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg" />

          <div>
            <h4>TitleProduct</h4>
            <p>PriceProduct</p>
          </div>
        </CardProduct>
      </div>
      <div data-aos="fade-up">
        <CardProduct>
          <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg" />

          <div>
            <h4>TitleProduct</h4>
            <p>PriceProduct</p>
          </div>
        </CardProduct>
      </div>

      <div data-aos="fade-up">
        <CardProduct>
          <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg" />

          <div>
            <h4>TitleProduct</h4>
            <p>PriceProduct</p>
          </div>
        </CardProduct>
      </div>
    </CardsContainer>
  )
}

export default ListProduct