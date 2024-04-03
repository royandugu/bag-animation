## Sample code that detects when the content is scrolled up to a certain section 

import {motion,useScroll,useTransform} from "framer-motion";
import { useRef, useEffect } from "react";

import "./plane.css";

const Plane=()=>{   
    const container = useRef<HTMLDivElement>(null);
    const bottomRef=useRef<HTMLDivElement>(null);
    const container2=useRef<HTMLDivElement>(null);
    

    const { scrollYProgress } = useScroll({
        target: container,
    })
    
    useEffect(() => {
        const handleScroll = () => {
          if (container2.current && bottomRef.current) {
            const containerRect = container2.current.getBoundingClientRect();
            const bottomRect = bottomRef.current.getBoundingClientRect();
    
            // Check if the bottom of bottomRef is within the viewport of the container
            const isBottom = bottomRect.bottom >= containerRect.bottom;
    
            console.log(isBottom);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const transformYScale=useTransform(scrollYProgress,[0,1],[0,700]);
 
    return(
        <div ref={container}> 
            <section ref={container2}  className="topParent">
                <motion.div ref={bottomRef} style={{y:transformYScale}} className="bag"/>
            </section>
            <section style={{height:"500vh"}}>

            </section>
        </div>
    )
}
export default Plane;