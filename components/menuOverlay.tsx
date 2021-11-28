import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'

interface IAppProps {
    navToggle: boolean
}

const MenuOverlay: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <>
              <div className="menu-overlay" style ={{backgroundColor: props.navToggle? 'white' : 'transparent', zIndex: props.navToggle? 999 : 0, 
        transition: props.navToggle? 'background-color 1s 1s' : 'background-color 1s 0s, z-index 1s 0s'}} >
             <div className="menu-overlay-wrapper" >
                 <div className="menu" style ={{transform: props.navToggle? 'translate3d(0, -100vh, 0)' : 'translate3d(0, 100vh, 0)'}}>
                     <div className="wave-menu">
                        
                     </div>
                     <div className="content-menu">
                         <p>Shop</p>
                         <Link href="/gsap">
                             <a>Buy Online</a>
                         </Link>
                         <Link href="/">
                             <a>Find in Store</a>
                         </Link>
                         <Link href="/">
                             <a>Merch</a>
                         </Link>
                     </div>
                    
                 </div>
                 <div className="menu" style ={{transform: props.navToggle? 'translate3d(0, -64vh, 0)' : 'translate3d(0, 100vh, 0)'}}>
                      <div className="wave-menu">
                       
                     </div>
                     <div className="content-menu">
                         <p>Info</p>
                         <Link href="/">
                             <a>FAQ</a>
                         </Link>
                         <Link href="/">
                             <a>Email Us</a>
                         </Link>
                     </div>
                   
                 </div>
                 <div className="menu" style ={{transform: props.navToggle? 'translate3d(0, -32vh, 0)' : 'translate3d(0, 100vh, 0)'}}>
                     <div className="wave-menu">
                        
                     </div>
                     <div className="content-menu">
                         <p>Social</p>
                         <Link href="/">
                             <a>Instagram</a>
                         </Link>
                         <Link href="/">
                             <a>Facebook</a>
                         </Link>
                     </div>
                     
                 </div>
             </div>
         </div>
  
        </>
    )
};

export default MenuOverlay;
