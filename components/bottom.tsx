import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'

interface IAppProps {
}

const Bottom: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <>
             <div className="border-patent border-patent-01"></div>
            <div className="border-patent border-patent-02"></div>
            <div className="border-patent border-patent-03"></div>
            <div className="border-patent border-patent-04"></div>
            <section className="footer">
                <div className="container">
                    <div className="info-footer">
                        <div className="footer-info">
                            <p>Shop</p>
                            <Link href="/">
                                <a><p>Variety Pack</p></a>
                            </Link>
                            <Link href="/">
                                <a><p>Find In Store</p></a>
                            </Link>
                        </div>
                        <div className="footer-info">
                            <p>Info</p>
                            <Link href="/">
                                <a><p>Variety Pack</p></a>
                            </Link>
                            <Link href="/">
                                <a><p>Find In Store</p></a>
                            </Link>
                        </div>
                        <div className="footer-info">
                            <p>Contact</p>
                            <Link href="/">
                                <a><p>Variety Pack</p></a>
                            </Link>
                            <Link href="/">
                                <a><p>Find In Store</p></a>
                            </Link>
                        </div>
                        <div className="footer-info">
                            <div className="email-input">
                                <input type="text" />
                                <div className="after-fix">
                                    <p> Subscribe </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="media">
                        <div className="logo">
                            <Image src="/logo.svg" alt="kookSlams" width={200} height={200} />
                            <p>
                                © Kookslams Hard Seltzer, LLO
                                Branding and Site by OhNice
                            </p>
                        </div>
                        <div className="social">
                            <div className="facebook"></div>
                            <div className="instagram"></div>
                        </div>
                    
                    </div>
                </div>
               
              
            </section>
           
        </>
    )
};

export default Bottom;
