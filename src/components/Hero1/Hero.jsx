import React from 'react'
import { Div } from './HeroStyled'
import { positionalKeys } from 'motion'


const Hero = () => {
  return (
    <>
        <Div>

        <div className='container1'>
        <div className='trusted'>
            <div><img src='src\assets\star2.svg' /></div>
            <div className='couples'>TRUSTED BY 20,000+ COUPLES</div>
            </div>
            <div className='track'>Track your fertility<br />hormones at home,<br /> in 10 minutes</div>
            <div className='accurate'>Get accurate results of <span>Estrogen, LH, Progesterone<br /> metabolite PdG and FSH</span> with Inito, the all-in-one,<br />FDA-registered fertility monitor.</div>
            <button className='btn1'>How does Inito work?</button>
            </div>

            <div className='container2'>
            <img src='src\assets\iPhone 13 Pro2.png' />
            <img src='src\assets\crumbs1.svg' className='img3' />
            <img src='src\assets\Vector 54.png' className='img2' />
            </div>

        </Div>
    </>
  )
}

export default Hero
