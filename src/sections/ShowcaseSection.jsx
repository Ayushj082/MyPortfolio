import { useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = ()=>{

    const sectionref = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card,index)  => {
        gsap.fromTo(
            card,
            {
                y:50, opacity:0  
            },
            {
                y:1 , opacity:1 , duration: 1, delay: 0.3 *(index+1),
                ScrollTrigger:{ trigger: card, start: 'top bottom -=100'}
            }
        )
    });
        gsap.fromTo(sectionref.current, {opacity:0}, {opacity: 1, duration:1.5})
    },[]);
    return (
        <section id="work" ref={sectionref} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                {/* LEFT SIDE */}
                <div className="first-project-wrapper" ref={project1Ref}>
                <a href="https://jan-sahayak.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper">
                <img src="/images/project4.png" alt="QuickBooker" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105" />
                </div>
                </a>
                <div className="text-content">
                <h2>
                <a href="https://jan-sahayak.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    JanSahayak is a full-stack web app with WhatsApp integration that enables citizens to report municipal issues. 
                </a>
                </h2>
                    <p className="text-white-50 md:text-xl">
                    A website built for admin to manage the issues and employees.
                    </p>
                </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="project-list-wrapper overflow-hidden">
                <a href="https://quick-booker.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#56caf5]">
                        <img
                        src="/images/project1.png"
                        alt="FitBit"
                        className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
                        />
                    </div>
                    <h2>
                        On-Demand Rooms Made Simple with a Powerful, User-Friendly Website called QuickBooker
                    </h2>
                    </div>
                </a>
                <a href="https://github.com/Ayushj082/SupplyChainManagement" target="_blank" rel="noopener noreferrer">
                    <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img
                        src="/images/project2.png"
                        alt="SupplyChain Management Platform"
                        className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
                        />
                    </div>
                    <h2>
                        SupplyChain Management Platform
                    </h2>
                    </div>
                </a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection