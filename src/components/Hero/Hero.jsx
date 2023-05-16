import   React  from 'react';
import Header from './Header/Header';
import './Hero.css' 
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero =()=> {
    const transition={type:'spring', duration : 3}
    const mobile=window.innerWidth<=768 ? true: false;
        return (
<div>
    <div className="hero" id="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
            <motion.div
            initial={{left:mobile? "165px": "238px"}}
            whileInView={{left: '9px'}}
            transition={{...transition, type:'tween'}}
            ></motion.div>
            <span>The best fitness club in the town</span>
            </div>
             <div className="hero-text">
                <div><span className='stroke-text'>Shape </span>
                    <span>Your</span>
                    </div>
                    <div><span>
                       Ideal Body </span></div>
                       <div ><span>IN WHERE WE WILL HELP YOU TO SHAPE AND BUILDYOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLSET</span></div>
             </div>
             {/*figures */}
             <div className="figures">
                <div>
                    <span>
                        {/* 2:21 minute */}
                        <NumberCounter end={140} start={100} delay='4' prefix="+"/>
                    </span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span>  <NumberCounter end={978} start={800} delay='4' prefix="+"/></span>
                 <span>MEMBERS JOINED</span>
                </div>
                <div>
                    <span>  <NumberCounter end={50} start={10} delay='4' prefix="+"/></span>
                    <span>FITNESS PROGRAMS</span>
                </div>
             </div>
             {/* hero buttons */}
             <div className="hero-buttons">
                <buttons className="btn">
                    Get satrted
                </buttons>
                <buttons className="btn">
                    Learn More
                </buttons>
             </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>
            <motion.div
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition} className='heart-rate'>
                <img src={Heart} alt="" />
                <span>
                    Heart Reate</span>
                    <span>
                        116 Bpm
                    </span>
            </motion.div>
            {/* hero images */}
            <img src={hero_image} alt="" className="hero-image" />
            <img src={hero_image_back} alt="" className="hero-image-back" />
            {/*Calorie */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span className='one'>
                    Calories Burn
                    </span><span className='two'>
                    220 kcal
                    </span>
                    </div>
            </div>
            </div>
    </div>
</div>
        );
    
}

export default Hero;
