import React, { useState } from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import ReactImageMagnify from 'react-image-magnify';
import { Slider } from '../styles/sliderStyle'

const SliderImg = ({ imgData }) => {

    const [current, setCurrent] = useState(0);
    const length = imgData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(imgData) || length <= 0) {
        return null;
    }


    return (
        <Slider>
            <IoMdArrowDropleftCircle className='leftArrow' onClick={prevSlide} />
            <IoMdArrowDroprightCircle className='rightArrow' onClick={nextSlide} />

            {
                imgData.map((slide, index) => (
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'nameProduct',
                                    isFluidWidth: true,
                                    src: slide
                                },
                                largeImage: {
                                    src: slide,
                                    width: 1200,
                                    height: 1000
                                }
                            }} />
                        )}
                    </div>
                ))
            }



        </Slider>
    );
};

export default SliderImg;