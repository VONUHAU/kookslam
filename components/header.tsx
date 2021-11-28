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
    console.log(pathname)
    return (
        <>
            <header style={{"position": pathname == "/"? "fixed": "fixed"}}>
                <div className="header">
                
                    <div className="nav" onClick = {()=>{setNavToggle(!navToggle)}}>
                        <div className={navToggle? "openNav" : "closeNav"}>
                            {navToggle &&  <img src="/close-icon.svg" alt="" />}
                        </div>
                    </div>
                    <div className="logo">
                    <Image src="/logo.svg" alt="kookSlams" width={150} height={90} />
                    </div>
                    
                    <div className="cart" style={{"position": "fixed"}}>
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
