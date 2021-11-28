import { useRef, useEffect } from "react";
import Image from 'next/image'
import workout from "../public/can-01.png";
import greensocklogo from "../public/can-02.png";
import happy from "../public/can-03.png";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#gsap-logo"),
      {
        opacity: 0,
        scale: 0.2,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector(".line"), {
      scale: 0,
      ease: "none",
      scrollTrigger: {
        trigger: element.querySelector(".third"),
        scrub: true,
        start: "top bottom",
        end: "top top"
      }
    });
  }, []);
  return (
    <div className="App" ref={ref}>
      <div className="first">
        <h1>ScrollTrigger</h1>
        <p className="first-paragraph">
          is the coolest Greensock plugin.
          <span role="img" aria-label="celebrating">
            🥳
          </span>
        </p>
        <div className="logo-main" >
          <Image src={workout} id="workout-logo" alt="workout" width={300} height={450} />
        </div>
      </div>
      <div className="second">
        <div className="logo-main">
          <Image src={greensocklogo} id="gsap-logo" alt="greensocklogo"  width={300} height={450}/>
        </div>
      </div>
      <div className="third">
        <p>
          <span className="line" />
        </p>
        <div className="logo-main">
          <Image src={happy} id="happy-logo" alt="happy"  width={300} height={450}/>
        </div>
      </div>
      <style jsx>
      {`
        *{
          padding: 0%;
          margin: 0%;
          box-sizing: border-box;
        }
        
        .first{
          width: auto;
          height:500px;
          background-color:  #fdfffc;
          margin-top: 30px;
        }
        
        .second{
          width:auto;
          height: 400px;
          background-color: #e0fbfc;
        }
        
        .third{
          width: auto;
          height: 400px;
          background-color: #fdfffc;
        }
        
        .line {
          width: 100%;
          max-width: 1400px;
          height: 20px;
          margin-top:20px;
          position: relative;
          display: inline-block;
          background-color:#023047;
        }
        
        h1{
          text-align: center;
          padding-top: 90px;
          color: #023047;
          font-size: 60px;
        }
        
        .first-paragraph{
          text-align: center;
          color: #023047;
          font-size: 20px;
          font-weight: bold;
        }
        
        .logo-main{
          align-items: center;
          display: flex;
          justify-content: center;
        }
        
        #workout-logo{
          width: 500px;
          height: 300px;
          margin-top: 10px;
        }
        
        
        #gsap-logo{
          width: 500px;
          height: 300px;
          margin-top: 50px;
          padding-right: 80px;
        }
        
        #happy-logo{
          width: 500px;
          height: 300px;
        }
        
        .second-paragraph{
          font-size: 30px;
          margin-top: 40px;
        }
        
        .third-paragraph{
          font-size: 30px;
          margin-top: 40px;
        }
      `}
    </style>
    </div>

  );
}
export default App;