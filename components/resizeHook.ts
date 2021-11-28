import { useState, useEffect } from 'react';

export default function useCurrentWidth() {
    // save current window width in the state object
 
    let [width, setWidth] = useState(0);

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        const getWidth = () => window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

  return width;
}