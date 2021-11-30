import React, { useState, useRef, useEffect, useLayoutEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuOverlay from './menuOverlay'
import { useRouter } from 'next/router'

interface IAppProps {
   
}

const Header: React.FunctionComponent = (props) => {
    const [navToggle, setNavToggle] = useState<boolean>(false);
    const { asPath, pathname } = useRouter();
    const [onScroll, setPageOffestY] = useState(false)

    /////detect onscroll
    
    
    useEffect(() => {
        const yOffest = ()=> {
            if(window.pageYOffset > 200){
                setPageOffestY(true);
            }
        }
        function watchScroll() {
            window.addEventListener("scroll", yOffest);
          }
          watchScroll();
          // Remove listener (like componentWillUnmount)
          return () => {
            window.removeEventListener("scroll", yOffest);
          };
       
      }, []);
    
    return (
        <>
            <header>
                <div className="header">
                
                    <div className="nav" onClick = {()=>{setNavToggle(!navToggle)}} 
                    style={{"transform": pathname !== "/" && onScroll ? "translate(0, -140px)": ""}}>
                        <div className={navToggle? "openNav" : "closeNav"}>
                            {navToggle &&  <img src="/close-icon.svg" alt="" />}
                        </div>
                    </div>
                    <div className="logo"  style={{"transform": pathname !== "/" && onScroll ? "translate(0, -140px)": ""}}>
                    <Image src="/logo.svg" alt="kookSlams" width={150} height={90} />
                    </div>
                    
                    <div className="cart" style={{"transform": pathname !== "/" && onScroll ? "translate(0, -140px)": ""}}>
                        <Link href="/">
                            <a>
                                <Image src="/card.png" alt="kookSlams" width={40} height={30} />
                            </a>
                        </Link>
                    </div>

                </div>
            </header>
            <MenuOverlay navToggle = {navToggle}/>

        </>
    )
};

export default Header;
