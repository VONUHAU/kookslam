
import React from 'react'
import Image from 'next/image'
import Bubble from './bubble'
import Link from 'next/link'

const SquadComponent  = () => {
  return (

        <section className="section  section-right section-squad">
            <div className="fluid-container" >
                <Bubble></Bubble>
            </div>
            <div className="container">
                <div className="span squad-content-scroll">
                    <div className="image-can ">
                        <Image src="/12pack.png" alt="kookSlams" width={600} height={380} />
                    </div>
                </div>
                <div className="content ">
                        <div className="tittle squad-content-scroll">
                            <h1>
                                Squad assemble.
                            </h1>
                        </div>
                        <div className="sub-tittle squad-content-scroll">
                            <p>
                            Wet your whistle with these three unique flavors that will take your stoke to the max and redefine your lifes purpose.
                            </p>
                        </div>
                        <Link href="/shop">
                            <a>
                                <div className="button-kook squad-content-scroll">
                                    <div className="button-kook-shadow button-kook-color"> </div>
                                    <div className="button-kook-shadow button-kook-bg"> </div>
                                    <div className=" button-kook-content">Shop Now</div> 
                                
                                </div>
                            </a>
                        </Link>
                </div>
            </div>
           
        </section>
       
 
  )
  }

  export default SquadComponent