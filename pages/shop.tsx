import React, { useState, useRef, useEffect, useLayoutEffect} from 'react'
import Lottie from 'react-lottie'
import Layout from '../components/layout'
import Bottom from '../components/bottom'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import MenuOverlay from '../components/menuOverlay'
import Header from '../components/header';
import Image from 'next/image'
import Bubble from '../components/bubble'
import * as waveWhite from '../public/wave-white.json'
import * as wavePinkLight from '../public/wave-pink-light.json'
import * as waveYellowLight from '../public/yellow-light-wave.json'
import * as waveOrange from '../public/wave-organe.json'
import * as waveNoneOutline from '../public/wave-noneOutline.json'
import * as wavePinkNoneOutline from '../public/wave-pink-noneOutline.json'
import SquadComponent from '../components/squadComponent'
import useResize from '../components/resizeHook'
interface IAppProps {
}

const Shop: React.FunctionComponent<IAppProps> = (props) => {
    const [is12pack, setpack] = useState(true);
    const [w, setW] = useState<number>()

gsap.registerPlugin(ScrollTrigger);
const ref = useRef<HTMLDivElement>(null);
const leftCanRef = useRef<HTMLDivElement>(null);
const canFruitRef = useRef<HTMLDivElement>(null);
const fruitRef = useRef<HTMLDivElement>(null);
const q = gsap.utils.selector(ref);
let width = useResize();

//tear drop flow
useEffect(() => {
    
  
    const canLeftOffest=  w/2 - leftCanRef?.current?.getBoundingClientRect().x -  leftCanRef?.current?.offsetWidth/2;
    const canRightOffset = -w/2 + leftCanRef?.current?.getBoundingClientRect().x + leftCanRef?.current?.offsetWidth/2;

    const tl = gsap.timeline({defaults: { ease: "power1"}})
    tl.set(q(".can-left"), {
        opacity: 0,
      
    })
    .set(q(".can-right"), {
        opacity: 0,
       
    })
    .set(q(".can-center"), {
        opacity: 0,
       
    })
    .to(q(".tear"), { 
        y: "500",
        duration: 1,
    })
    .to(q(".tear"), {
        opacity: "0",
        duration: 0.5,
    })
    .to(q(".white-outline-can"), {
        opacity: "0",
        duration: 0.5,
        
    }, "-=0.5")
    .to(q(".blank-can"), {
        opacity: "1",
        duration: 0.1,
    })
    .to(q(".blank-can"), {
        opacity: "0",
        duration: 0.5,
    })
    .to(q(".can-center"), {
        opacity: "1",
        duration: 0.04,
    })
    .to(q(".spinner"), {
        scale: 1.2,
        rotation: 360,
        duration: 1,
    }, )
    .from(q(".can-left"), {
        x: canLeftOffest,
        opacity: 1,
        duration: 1,
    }, "-=1")
    .from(q(".can-right"), {
        x: canRightOffset,
        opacity: 1,
        duration: 1,
    }, "-=1")
    .to(q(".spinner"),{
        opacity: 0,
        duration: 0.5,
    })
  
   
    ScrollTrigger.create({
        trigger: ".kooksking-section",
        animation: tl,
        start: "top center",
        end: "top top",
        scrub: false,

      });
}, []);


///party section can solo animation
const animationCanSolo = (elem: string, direction: number)=>{
    
   
    const divTarget = q(elem);
    const tl = gsap.timeline({defaults: { ease: "power1.inOut"}, repeat: -1, yoyo: true});
    const animation = 
    tl.set(q(elem), {
        rotation: 12*direction,
        y: -10,
        transformOrigin:"50% 50%"
    })
    .to(q(elem), {
        rotation: 11*direction,
        transformOrigin:"50% 50%",
        y:10,
        duration: 2
    })
    return animation;
    
}

////animation fruits
const fruitAnimation = (className: string,x:number, y:number, deg: number, delay:number, direction: number, offsetX: number = 0)=>{
    //const innerWidth = window.innerWidth;
    const divTarget = q(className);
    const xMove = canFruitRef?.current? canFruitRef.current.offsetWidth / 2 : 0; 
    console.log(xMove)
    const tl = gsap.timeline({defaults: { ease: "power1.inOut"}, repeat: -1, yoyo: true});
    const animation = 
    gsap.set(q(className), {
       x: (xMove + offsetX)*direction,
        opacity: 1,
        y,
        rotation: deg,
        transformOrigin: "50% 50%",
        z: 0.01, // solve jecky in firefox browser
       
    })
    gsap.to(q(className), {
        x: (xMove + offsetX + x)*direction,
        opacity: 1,
        y: y+20,
        z: 0.01, // solve jecky in firefox browser
        ease: "power1.inOut",
        transformOrigin: "50% 50%",
        repeat: -1,
        duration: 2,
        rotation: deg,
        delay: delay,
        yoyo: true,
    
    
    })
    return animation;
    
}



useEffect(()=>{
    setW(window.innerWidth);
    animationCanSolo(".can", -1);
    animationCanSolo(".can-right-solo", 1);
    fruitAnimation(".guava",  5, 80, 0, 0, -1)
    fruitAnimation(".passion-fruit",  7, -190, 0, 0.1, 1)
    fruitAnimation(".orange",  5, 200, 0, 0.2, 1)
    fruitAnimation(".mango",  6, 100, -10, 0.2, 1)
    fruitAnimation(".mango-02",   7, -50, -20, 0.2, 1)
    fruitAnimation(".pineapple",   5, 100, 90, 0.2, -1)
    fruitAnimation(".pineapple-02", 6, -150, -90, 0.2, -1, 50)
    fruitAnimation(".blood-orange", 6, -200, -90, 0.2, 1)
    fruitAnimation(".blood-orange-02", 6, 50, -90, 0.2, 1, 50)
    fruitAnimation(".blood-orange-03", 6, 100, -90, 0.2, -1, 50)
  
}, [width])

///bubble animtion gsap
useEffect(() => {
    const bubbles = q(".bubble");
    for(var bubble of bubbles){
        const tl = gsap.timeline({defaults: { ease: "none"}, repeat: -1})
        tl.to(bubble, {
            y: "random(-300, -500, 40)",
            x: `random(-100, 100, 30)`,
            duration: 2,
            delay: "random(0, 6, 0.2)"
        })
        .to(bubble, {
            x: `random(-100, 100, 40)`,
            y: "-=800",
            opacity:0,
            duration: 3,
        })
    }
   
}, []);

//wave config
const config = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
}   
const waveWhiteOption = {...config,  animationData: waveWhite};
const wavePinkLightOption = {...config,  animationData: wavePinkLight};
const waveYellowLightOption = {...config,  animationData: waveYellowLight};
const waveOrangeOption = {...config,  animationData: waveOrange};
const waveNoneOutlineOption = {...config,  animationData: waveNoneOutline};
const wavePinkNoneOutlineOption = {...config,  animationData: wavePinkNoneOutline};

    const handlePickPack = (pack:boolean)=>{
        setpack(pack);
    }
  return (
        <div ref = {ref}>
        <Layout>
            <Header/>
            <div className="shopping">
            <section className="hero-section-shop">
                <div className="container">
                    <div className="content">
                        <div className="grid">
                            <div className="tittle shopping-tittle">
                                <h1> Variety Pack</h1>               
                            </div>
                            <div className="img-topic-wrapper">
                                <div className="img-topic box">
                                    <Image src="/12pack-open.png" alt="kookSlams" width = {800} height = {500} objectFit="contain"  />
                                </div>
                                <div className="img-topic carboard">
                                    <Image src="/carboard-bg-.png" alt="kookSlams" width = {500} height = {300} objectFit="contain"  />
                                </div>
                                <div className="img-topic can-pack otf-pack">
                                    <Image src="/otf-row.png" alt="kookSlams" width = {500} height = {300} objectFit="contain"  />
                                </div>
                                <div className="img-topic can-pack rib-pack">
                                    <Image src="/rib-row.png" alt="kookSlams" width = {500} height = {300} objectFit="contain"  />
                                </div>
                                <div className="img-topic can-pack pw-pack">
                                    <Image src="/pw-row.png" alt="kookSlams" width = {500} height = {300} objectFit="contain"  />
                                
                                </div>
                            </div>
                            <div className="deep">
                                <div className="sub-tittle-shopping">
                                    <p>Our variety 12 and 6 packs are available for statewide shipping throughout California.</p>
                                </div>
                                <div className="shopping">
                                    <div className="shopping-processing">
                                        <div className="pick-size">
                                            <p>Pick Size</p>
                                            <div className="size">
                                                <div className={is12pack? "6-pack pack picked" : "6-pack pack"} onClick = {()=>handlePickPack(true)}> <p> 12 </p> </div>
                                                        
                                                <div className={is12pack? "12-pack pack" : "12-pack pack picked"} onClick = {()=>handlePickPack(false)}><p>6 </p> </div>

                                                
                                            </div>
                                        </div>
                                        <div className="quanity">
                                            <p>QTY</p>
                                            <div className="count">
                                                <div className="subtract"> - </div>
                                                <div className="number"> 1 </div>
                                                <div className="add"> + </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sum"> $21.99</div>
                                </div>
                                <Link href="/check-out">
                                <a>
                                    <div className="button-kook pog-content-scroll add-to-card">
                                        <div className="button-kook-shadow button-kook-color"> </div>
                                        <div className="button-kook-shadow button-kook-bg"> </div>
                                        <div className=" button-kook-content ">Add to Card</div> 
                                    </div>
                                </a>
                            </Link>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
            </section>
            <div className="wave">
               <Lottie options={waveWhiteOption}
                        height={300}
                        width= {'100%'}
                
                    />
            </div>
            <section className="section kooksking-section">
              
               <div className="container">
                   <div className="content">
                       <div className=" sub-tittle title-light">
                           <p>
                                We crusaded deep into forbidden seas searching for the perfect beverage formula. After nearly giving up hope, the almighty Poseidon himself visited us in a dream.
                           </p>
                       </div>
                       <div className="tear-king">
                            <div className="tear">
                                
                            <Image src="/tear-drop.png" alt="kookSlams" width = {50} height = {25} objectFit="contain"  />
                            </div>
                            <Image src="/kooksking.svg" alt="kookSlams" width = {500} height = {300} objectFit="contain"  />
                       </div>
                       
                        <div className=" sub-tittle title-light">
                            <p>
                            After the wise one heard our tales of bubbly grandeur he smiled upon us and shed one single tear. It would be this very tear that would inspire our three unique flavors.
                            </p>
                        </div>
                   </div>
                   
                 
                   
               </div>
               <div className="kookslams-single-can">
                        <div className="spinner">
                            <Image src="/spinner.png" alt="kookSlams" width={1200} height={1200} />
                        </div>
                        <div className="white-can blank-can">
                            <Image src="/blank-can.png" alt="kookSlams" width={340} height={649} />
                        </div>
                        <div className="white-can white-outline-can">
                            <Image src="/white-can.png" alt="kookSlams" width={340} height={649} />
                        </div>
                       
                        <div className="cans">
                            <div className="can-spin can-left" ref= {leftCanRef}>
                                <Image src="/can-02.png" alt="kookSlams" width={340} height={649} />
                            </div>
                            <div className="can-spin can-center">
                                <Image src="/can-01.png" alt="kookSlams" width={340} height={649} />
                            </div>
                            <div className="can-spin can-right">
                                <Image src="/can-03.png" alt="kookSlams" width={340} height={649} />
                            </div>

                        </div>
                      
                     
                </div>
                    <Bubble/>
            </section>
            <div className="wave">
               <Lottie options={wavePinkLightOption}
                        height={300}
                        width= {'100%'}
                
                    />
            </div>
            <section className="section flavor-section party-section">
              
                <div className="container">
                    <div className="content">
                        <div className="tittle">
                            <h1>Party Wave</h1>
                        </div>
                        <div className="sub-tittle">
                            <p> Party Wave was born on the belief that your squad and POG matter. However mysterious the two might be, both experiences give you a confidence that your life was meant for something much bigger than yourself.</p>
                        </div>
                    </div>
                </div>
                <div className="fluid-container-party">
                  
                        <div className="wave wave-cover-top">
                            <Lottie options={waveNoneOutlineOption}
                                height={300}
                                width= {'100%'}
                        
                            />
                            
                        </div>
                        <div className="wave wave-cover-bottom">
                            <Lottie options={waveNoneOutlineOption}
                                height={300}
                                width= {'100%'}
                            />
                            
                        </div>
                        <div className="wave-child-top">
                            <Lottie options={wavePinkNoneOutlineOption}
                                height={300}
                                width= {'100%'}
                            />
                            
                        </div>
                        <div className="wave-child-bottom">
                            <Lottie options={wavePinkNoneOutlineOption}
                                height={300}
                                width= {'100%'}
                            />
                            
                        </div>
                      
                   
                   
                    <div className="solo-can-pros">
                        <div className="fruit fruit-left passion-fruit">
                            <Image src="/passionfruit.png" alt="kookSlams" width={330} height={362} />
                        </div>
                        <div className="fruit fruit-left-02 orange" ref = {fruitRef}>
                             <Image src="/orange.png" alt="kookSlams" width={360} height={360} />
                        </div>
                        <div className="fruit fruit-right guava">
                            <Image src="/guava.png" alt="kookSlams" width={330} height={381} />
                        </div>
                        <div className="can">
                                <div className="div" ref = {canFruitRef}>
                                    <Image src="/can-02.png" alt="kookSlams" width={430} height={820} />
                                </div>
                          
                        </div>
                           
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="sub-tittle">
                            <p>
                                All we can assure you of is a raging party for your palette that will give you pause and wonder if this is the greatest moment of your life. A moment that’s been crammed with Passionfruit, Orange and Guava. A moment that cannot accurately be described with mere words, it must be felt, nay, tasted.
                            </p>
                        </div>
                    </div>
                </div>
               
            </section>
            
            <section className="section flavor-section over-section">
                <div className="fluid-container">
                    <div className="wave">
                        <Lottie options={waveYellowLightOption}
                            height={300}
                            width= {'100%'}
                        />
                    </div>
                  
                </div>
                <div className="container">
                    <div className="content">
                        <div className="tittle">
                            <h1>Party Wave</h1>
                        </div>
                        <div className="sub-tittle">
                            <p> Party Wave was born on the belief that your squad and POG matter. However mysterious the two might be, both experiences give you a confidence that your life was meant for something much bigger than yourself.</p>
                        </div>
                    </div>
                </div>
                <div className="fluid-container-party">
                    <div className="star-yellow">
                        <Image src="/yellow-star.svg" alt="kookSlams" width={1200} height={2000} />
                    </div>
                    <div className="solo-can-pros">
                        <div className="fruit pineapple fruit-right">
                            <Image src="/pineapple.png" alt="kookSlams" width={500} height={290} />
                        </div>
                        <div className="fruit pineapple-02 fruit-right-02">
                            <Image src="/pineapple.png" alt="kookSlams" width={500} height={290} />
                        </div>
                        <div className="fruit  fruit-left mango">
                             <Image src="/mango.png" alt="kookSlams" width={320} height={430} />
                        </div>
                        <div className="fruit fruit-left-02 mango-02">
                            <Image src="/mango.png" alt="kookSlams" width={320} height={430} />
                        </div>
                        <div className="can can-right">
                          
                                <Image src="/can-01.png" alt="kookSlams" width={430} height={820} />
                          
                        </div>
                           
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="sub-tittle">
                            <p>
                                All we can assure you of is a raging party for your palette that will give you pause and wonder if this is the greatest moment of your life. A moment that’s been crammed with Passionfruit, Orange and Guava. A moment that cannot accurately be described with mere words, it must be felt, nay, tasted.
                            </p>
                        </div>
                    </div>
                </div>
               
            </section>
            <section className="section flavor-section wave-section">
                <div className="container-fluid">
                <div className="wave">
                        <Lottie options={waveOrangeOption}
                            height={300}
                            width= {'100%'}
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="tittle">
                            <h1>Party Wave</h1>
                        </div>
                        <div className="sub-tittle">
                            <p> Party Wave was born on the belief that your squad and POG matter. However mysterious the two might be, both experiences give you a confidence that your life was meant for something much bigger than yourself.</p>
                        </div>
                    </div>
                </div>
                <div className="fluid-container-party">
                    <div className="wave">

                    </div>
                    <div className="solo-can-pros">
                        <div className="fruit fruit-left blood-orange">
                            <Image src="/blood-orange.png" alt="kookSlams" width={300} height={300} />
                        </div>
                       
                        <div className="fruit fruit-left-02 blood-orange-02">
                             <Image src="/blood-orange.png" alt="kookSlams" width={330} height={330} />
                        </div>
                        <div className="fruit fruit-left-02 blood-orange-03">
                            <Image src="/blood-orange.png" alt="kookSlams" width={350} height={350} />
                        </div>
                        <div className="can can-right-solo">
                          
                                <Image src="/can-03.png" alt="kookSlams" width={430} height={820} />
                          
                        </div>
                           
                    </div>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="sub-tittle">
                            <p>
                                All we can assure you of is a raging party for your palette that will give you pause and wonder if this is the greatest moment of your life. A moment that’s been crammed with Passionfruit, Orange and Guava. A moment that cannot accurately be described with mere words, it must be felt, nay, tasted.
                            </p>
                        </div>
                    </div>
                </div>
               
            </section>
            </div>
            <SquadComponent/>
        </Layout>
        <Bottom/>
      </div>
  )
};

export default Shop;
