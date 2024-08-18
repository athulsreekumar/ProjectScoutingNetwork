import React from 'react'
import './ourclients.scss'
import Slider from 'react-infinite-logo-slider'


export default function Ourclients() {


    return (
        <div className="ourclients">
            <div className="titleDiv">
                Our Client Network
            </div>
            <div className="logoDiv">
                <div className="logoImgs">

                    <Slider
                        width="250px"
                        duration={40}
                        pauseOnHover={true}
                        blurBorders={false}
                        blurBoderColor={'#fff'}
                    >

                        <Slider.Slide>
                            <img src="/assets/fc1.png" alt="any" className='w-36' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src="/assets/fc2.png" alt="any2" className='w-36' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src="/assets/fc3.png" alt="any3" className='w-36' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src="/assets/fc2.png" alt="any3" className='w-36' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src="/assets/fc1.png" alt="any3" className='w-36' />
                        </Slider.Slide>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
