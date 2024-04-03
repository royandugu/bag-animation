import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";


import "./firstSection.css";

const FirstSection = () => {
    const container = useRef<HTMLDivElement>(null);
    const bagRef = useRef<HTMLDivElement>(null);
    const doorRef = useRef<HTMLDivElement>(null);

    const [animateCloseDoor, setAnimateCloseDoor] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
    })

    const transformYScale = useTransform(scrollYProgress, [0, 1], ["0vh", "479vh"]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (container.current && bagRef.current) {
                const containerRect = container.current.getBoundingClientRect();
                const bagRect = bagRef.current.getBoundingClientRect();

                // Calculate the positions of bagRef relative to the viewport
                const bagBottomRelativeToViewport = (bagRect.bottom + 10) - containerRect.top;
                const containerHeight = containerRect.height;

                // Check if the bottom of bagRef is within the viewport of container
                const isTouching = bagBottomRelativeToViewport >= containerHeight;
                if (isTouching) {
                    setAnimateCloseDoor(true);
                }
                else {
                    setAnimateCloseDoor(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (animateCloseDoor) {
            if (doorRef.current) {
                if(bagRef.current) bagRef.current.style.visibility="hidden";
                doorRef.current.classList.remove("openDoor");
            }
        }
        else {
            if(bagRef.current) bagRef.current.style.visibility="visible";
            doorRef.current?.classList.add("openDoor")
        }
    }, [animateCloseDoor])

    return (
        <>
            <section ref={container} className="initialContainer">
                <div ref={doorRef} className="doorAnimated openDoor"></div>
                <div className="doorNonAnimated"></div>
                <div />
                <div>
                    <h1>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</h1>
                </div>
                <div>
                    <motion.div ref={bagRef} style={{ y: transformYScale }} className="translate bag"> </motion.div>
                    {/* <section ref={container2}  className="topParent">
                <motion.div ref={bottomRef} style={{y:transformYScale}} className="bag fixed"/>
                <div className="door"/>
            
            </section>
            <section style={{height:"500vh", position:"relative", background:"green"}}>
            </section> */}
                </div>

            </section>


        </>

    )
}
export default FirstSection;