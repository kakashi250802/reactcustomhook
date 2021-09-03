import {useState,useEffect,useRef} from 'react';


function randomColor(currentColor) {
    const COLOR_LIST = ['red','green','yellow','black']
    const currentIndex =COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex= Math.trunc(Math.random() * COLOR_LIST.length)
        
    }
    
    return COLOR_LIST[newIndex];
}
function useMagicColor(props) {
    const [color,setColor] =useState ('transparent');
    const colorRef = useRef('transparent');
    // change color every one seconds

    useEffect(() => {
        const colorInterval= setInterval(() =>{
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        },1000)
        return () => {
            // cleanup
            clearInterval(colorInterval);
        }
    }, [])
    return color;
}

export default useMagicColor;