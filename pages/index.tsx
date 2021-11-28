import type { NextPage } from 'next'
import React, { useState, useRef, useEffect, useLayoutEffect} from 'react'
import Lottie from 'react-lottie'
import * as palm from '../public/palm02.json'
import * as wave from '../public/wave.json'
import * as waveWhite from '../public/wave-white.json'
import * as wavePink from '../public/wave-pink.json'
import * as waveYellow from '../public/wave-yellow.json'
import * as waveOrgane from '../public/wave-organe.json'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import vercel from '../public/vercel.svg'
import Layout from '../components/layout'
import Bottom from '../components/bottom'
import Bubble from '../components/bubble'
import pinkBone from '../public/otf.png'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import Header from '../components/header'
import SquadComponent from '../components/squadComponent'
const Home: NextPage = () => {
const [lottieState, setLottie] = useState<any>({isStopped: false, isPaused: false})



/////shimmer blur place hodler for lazy image 
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1:number, e2:number, e3:number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

///gsap
gsap.registerPlugin(ScrollTrigger);
const ref = useRef<HTMLDivElement>(null);
const element = ref.current;
const q = gsap.utils.selector(ref);

//timeline gsap
var tl = gsap.timeline({ defaults: {duration: 1, ease: "power1.inOut"} } );
useLayoutEffect(() => {
    const element = ref.current;
    
    tl.from(
      element!.querySelector(".rainbow-header"),
      {
        opacity: 1,
        y: 140,
        duration: 1.2,
        
        
      },
      
    ).from(
        element!.querySelector(".sub-title"),
        {
          opacity: 1,
          y: 80,
          stagger: 0.2,
     
        },
        "-=0.6"
      ).to(
        element!.querySelector(".rainbow-header"),
        {
          opacity: 1,
          y: 40,
          duration: 0.6
        },
        "-=0.4"
      ).
      to(
        element!.querySelector(".sub-title"),
        {
          opacity: 1,
          y: 40,
          duration: 0.6
        },
        "-=0.4"
      );
  }, []);

  
///bone infinite animation
useEffect(() => {
    const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 0.1})
    tl.fromTo(".img-cover", {
        y: "random(90, 100, 5)",
        duration: 3,
        ease: "power1.inOut",
        stagger: 0.1,
        
    }, {
        y: "random(60, 70, 5)",
        duration: 2,
        ease: "power1.inOut",
        stagger: 0.1,
    })
}, []);

useEffect(() => {
    gsapFadeIn(".let-party-scroll", ".let-party-scroll", 80, 1);
    gsapFadeIn(".bone", ".bone", 60, 1.2);
    gsapFadeIn(".guilt-content-scroll", ".guilt-content-scroll", 100, 1);
    gsapFadeIn(".pog-content-scroll", ".pog-content-scroll", 100, 1);
    gsapFadeIn(".over-content-scroll", ".over-content-scroll", 100, 1);
    gsapFadeIn(".beach-content-scroll", ".beach-content-scroll", 100, 1);
    gsapFadeIn(".squad-content-scroll", ".squad-content-scroll", 100, 1);
    gsapFadeIn(".can02", ".can02", 300, 2);

   
  }, []);

////fadein elements went scroll
const gsapFadeIn = (className:string, trigger: string, y:number, duration: number) =>{
    const element = ref.current;
    const gs = gsap.from(q(className), {
        y: y,
        z: 99999,
        ease: "none",
        duration,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element!.querySelector(trigger),
          scrub: false,
          start: "top center",
          end: "top top"
        }
      });
    return gs
}

///bubble animtion gsap
useEffect(() => {

    console.log(q(".bubble"))
    const bubbles = q(".bubble");
    for(var bubble of bubbles){
        const tl = gsap.timeline({defaults: { ease: "none"}, repeat: -1})
        tl.to(bubble, {
            y: "random(-700, -1000, 40)",
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


const config = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
}   
  
const palmOption = {...config,  animationData: palm};
const waveOption = {...config,  animationData: wave};
const waveWhiteOption = {...config,  animationData: waveWhite};
const wavePinkOption = {...config,  animationData: wavePink};
const waveYellowOption = {...config,  animationData: waveYellow};
const waveOrganeOption = {...config,  animationData: waveOrgane};



  return (
  <div ref = {ref}>
    <Layout>
      <>
       <Header/>
      
        <section className="hero-section">
          <div className="hero-wrapper container">
         
            <div className="rainbow-header show">
                <span style={{color: "#DEF440"}}>B</span>
                <span style={{color: "#DBFBFF"}}>r</span>
                <span style={{color: "#F87429"}}>e</span>
                <span style={{color: "#FFDBDB"}}>w</span>
                <span style={{color: "#D6B5FF"}}>e</span>
                <span style={{color: "#68DAFF"}}>d</span>

                <span style={{color: "#FF7ADD"}}> w</span>
                <span style={{color: "#DEF440"}}>i</span>
                <span style={{color: "#DBFBFF"}}>t</span>
                <span style={{color: "#DEF440"}}>h</span>
                <br></br>
                <span style={{color: "#F87429"}}>p</span>
                <span style={{color: "#FFDBDB"}}>o</span>
                <span style={{color: "#D6B5FF"}}>s</span>
                <span style={{color: "#68DAFF"}}>e</span>
                <span style={{color: "#FF7ADD"}}>i</span>
                <span style={{color: "#FFE708"}}>d</span>
                <span style={{color: "#ABEC00"}}>o</span>
                <span style={{color: "#FFDBDB"}}>n</span>
                <span style={{color: "#D6B5FF"}}>s</span>
             
                <span style={{color: "#68DAFF"}}> T</span>
                <span style={{color: "#FF7ADD"}}>e</span>
                <span style={{color: "#FFE708"}}>a</span>
                <span style={{color: "#DEF440"}}>r</span>
                <span style={{color: "#DBFBFF"}}>s</span>
            </div>
            <div className="sub-title show">
                <p>
                    5% abv. 100 Calories. 0g Sugar. <br></br>
                    Craft Hard Seltzer.
                </p>
            </div>
          </div>
        </section>

        <section className="let-party">
            <div className="fluid-container" >
                <div className="wave">
                    <Lottie options={waveOption}
                        height={300}
                        width= {'100%'}
                
                    />
            </div>
            </div>
          
            <div className="container">
                
                <div className="content " onClick = {()=>console.log("click")}>
                    <p className="let-party-scroll"> 
                        A trifecta of tropical flavors brewed with the finest ingredients to deliver
                        a taste that will leave a lasting imprint on your taste buds.
                    </p>
                    <Link href="/shop" >
                        <a>
                            <div className="button-kook let-party-scroll" >
                                <div className="button-kook-shadow button-kook-color"> </div>
                                <div className="button-kook-shadow button-kook-bg"> </div>
                                <div className=" button-kook-content">Let&apos;s Party</div> 
                               
                            </div>
                        </a>
                    </Link>
                   
                     
                </div>
               
                <div className="bone" >
                    
                   <div className="img-cover">
                       {/* <img src="/bone-drink-orange.png" alt="" style ={{width: "100%"}} /> */}
                    
                        <Image src="/bone-drink-orange.png" alt="kookSlams"  layout="fill" objectFit="contain"  />
                        <div className="hand">
                            <Image src="/hand.png" alt="kookSlams" width = {72} height = {40} objectFit="contain"  />
                        </div>
                        

                   </div>
                   <div className="img-cover">
                        {/* <img src="/bone-drink-orange.png" alt="" style ={{width: "100%"}} /> */}
                        <Image src="/bone-drink-pink.png" alt="kookSlams"  layout="fill" objectFit="contain" />
                   </div>
                   <div className="img-cover">
                        {/* <img src="/bone-drink-orange.png" alt="" style ={{width: "100%"}} /> */}
                        <Image src="/bone-drink-yellow.png" alt="kookSlams"  layout="fill" objectFit="contain" />
                   </div>
                 
                      
                 
                  
                </div>
                
            </div>
            <div className="palm fluid-container">
                    <div className="palm-left">
                        <Lottie options={palmOption}
                            height={"auto"}
                            width={400}
                            isStopped= {false}
                            isPaused= {false}
                          
                        />
                    </div>
                   <div className="palm-right">
                        <Lottie options={palmOption}
                                height={"auto"}
                                width={400}
                                isStopped= {false}
                                isPaused= {false}
                          
                        />
                   </div>
                </div>    
           
        </section>
        <div className="wave">
            <Lottie options={waveWhiteOption}
                            height={300}
                            width= {'100%'}
                    
            />
        </div>
        <section className="bubble-section">
            <div className="fluid-container" >
                <Bubble></Bubble>
            </div>
         
            <div className="guilt-wrapper container">
                <div className="content">
                <div className="tittle guilt-content-scroll">
                    <h1 >
                        A Guilt Free
                        Good Time.
                    </h1>
                    <div className = "sub-tittle guilt-content-scroll">
                        <p>
                            We all know that beer is heavy. It's time to leave those yeastie boys in your step-dads fridge and join us on a journey into the future of drinking.
                        </p>
                         
                    </div>
                   
                </div>
                <div className="props guilt-content-scroll">
                        <div className="props-child">
                            <div className="cricle cricle-sky">
                                Og of sugar
                            </div>
                            <p>
                                No sugar no shoes no
                                shirt, no problem
                            </p>
                        </div>
                        <div className="props-child">
                            <div className="cricle cricle-green">
                               100 cals
                            </div>
                            <p>
                            The drink your macro
                            app will thank you for.
                            </p>
                        </div>
                        <div className="props-child">
                            <div className="cricle cricle-yellow">
                                Gluten Free
                            </div>
                            <p>
                                Inflammation? Tummy
                                Troubles? All ailments
                                of the past.
                            </p>
                        </div>
                        <div className="props-child">
                            <div className="cricle cricle-pink">
                                Gluten Free
                            </div>
                            <p>
                                Made with all natural
                                fruit extract and no
                                added sweeteners.
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
        <section className="section section-pink section-left">
            <div className="fluid-container" >
                <div className="wave">
                    <Lottie options={wavePinkOption}
                        height={300}
                        width= {'100%'}
                
                    />
                </div>
            </div>
                <div className="container">
                    <div className="span pog-content-scroll">
                        <div className="image-can can02">
                            <Image src="/can-02.png" alt="kookSlams"  width={340} height={649}/>
                        </div>
                    </div>
                   <div className="content ">
                         <div className="tittle pog-content-scroll">
                            <h1>
                                Party Wave
                            </h1>
                        </div>
                        <div className="sub-tittle pog-content-scroll">
                            <p>
                            Our POG flavor will propel you and your squad on an expedition to Flavortown, USA. Combining passionfruit, orange, and guava brings you the party wave that lasts forever.
                            </p>
                        
                        </div>
                        <Link href="/shop">
                            <a>
                                <div className="button-kook pog-content-scroll">
                                    <div className="button-kook-shadow button-kook-color"> </div>
                                    <div className="button-kook-shadow button-kook-bg"> </div>
                                    <div className=" button-kook-content">Let&apos;s Party</div> 
                                
                                </div>
                            </a>
                        </Link>
                   </div>
                   
                   
                </div>
        </section>
        <div className="wave wave-bottom">
            
            <Lottie options={wavePinkOption}
                height={300}
                width= {'100%'}
                
            />
        </div>
        <div className="break-bg">

        </div>
        <section className="section section-yellow section-right">
            <div className="fluid-container" >
                    <div className="wave wave-organe">
                        <Lottie options={waveYellowOption}
                            height={300}
                            width= {'100%'}
                    
                        />
                    </div>
            </div>
            <div className="container">
                <div className="span over-content-scroll">
                    <div className="image-can">
                        <Image src="/can-01.png" alt="kookSlams" width={340} height={649} />
                    </div>
                </div>
                <div className="content ">
                        <div className="tittle over-content-scroll">
                            <h1>
                                OVER THE FALLS
                            </h1>
                        </div>
                        <div className="sub-tittle over-content-scroll">
                            <p>
                            Prepare to get hucked into a spin cycle of refreshment. We’ve paired pineapple and mango to send you hurling face first into a foamball of flavor.
                            </p>
                        
                        </div>
                        <Link href="/shop">
                            <a>
                                <div className="button-kook over-content-scroll">
                                    <div className="button-kook-shadow button-kook-color"> </div>
                                    <div className="button-kook-shadow button-kook-bg"> </div>
                                    <div className=" button-kook-content">Send it</div> 
                                
                                </div>
                            </a>
                        </Link>
                </div>
            </div>
           
        </section>
        <section className="section section-organe section-left">
            <div className="fluid-container" >
                    <div className="wave wave-organe">
                        <Lottie options={waveOrganeOption}
                            height={300}
                            width= {'100%'}
                    
                        />
                    </div>
            </div>
            <div className="container">
                <div className="span beach-content-scroll">
                    <div className="image-can">
                        <Image src="/can-03.png" alt="kookSlams" width={340} height={649} />
                    </div>
                </div>
                <div className="content ">
                        <div className="tittle beach-content-scroll">
                            <h1>
                                Rest In Beach
                            </h1>
                        </div>
                        <div className="sub-tittle beach-content-scroll">
                            <p>
                            Join Davey Jones and his legion of scallywags with the most delicious blood orange hard seltzer you’ve ever had. But beware, the taste has a price, and that price is your eternal soul.
                            </p>
                        
                        </div>
                        <Link href="/shop">
                            <a>
                                <div className="button-kook beach-content-scroll">
                                    <div className="button-kook-shadow button-kook-color"> </div>
                                    <div className="button-kook-shadow button-kook-bg"> </div>
                                    <div className=" button-kook-content">I'm Ready</div> 
                                
                                </div>
                            </a>
                        </Link>
                </div>
            </div>
           
        </section>
        <div className="wave">
        </div>
        <div className="wave">
        </div>
        <SquadComponent/>
        <section className="section section-backgound-img">
            <div className="container">
                <div className="green-backgound">
                    <div className="white-backgound">
                    <div className="header-white">
                        <div className="header-window">
                            <p className="close"> X </p>
                            
                            <div className="right-window">
                            
                                <div className="circle-window circle-window-top"></div>
                                <div className="circle-window circle-window-top"></div>
                                <div className="circle-window circle-window-top"></div>
                            </div>
                                    
                        </div>
                    </div>
                   
                    <div className="window">
                        <div className="dialog">
                            <div className="header-window">
                                <p className="close"> X </p>
                                
                                <div className="right-window">
                                
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                </div>
                                
                            </div>
                            <div className="content-window">
                                <p>NOT SPAM</p>
                            </div>
                        </div>
                    </div>
                    <div className="window">
                        <div className="dialog">
                            <div className="header-window">
                                <p className="close"> X </p>
                                
                                <div className="right-window">
                                
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                </div>
                                
                            </div>
                            <div className="content-window">
                                <Image src="/shopnow.gif" alt="kookSlams" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                    <div className="window">
                        <div className="dialog">
                            <div className="header-window">
                                <p className="close"> X </p>
                                
                                <div className="right-window">
                                
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                    <div className="circle-window"></div>
                                </div>
                                
                            </div>
                            <div className="content-window">
                                <Image src="/otf.png" alt="kookSlams" layout="fill" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                   
                   
                    <div className="content">
                        <div className="tittle">
                                <h1>
                                    Join the slam fam.
                                </h1>
                        </div>
                        <div className="sub-tittle">
                            <p>
                                Get early access to launch parties, sneak peaks at new releases, and much more.
                            </p>
                        
                        </div>
                        <div className="email-input">
                            <input type="text" />
                            <div className="after-fix">
                                <p> Subscribe </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                   

                </div>
            </div>
        </section>
       
      </>
    </Layout>
    <Bottom></Bottom>
  </div>
  )
  }

  export default Home