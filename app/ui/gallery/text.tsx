'use client'
'use client'

import { bree } from "@app/libs/fonts/font"
import { useMotionValueEvent, useScroll,motion, useAnimation } from "framer-motion"
import { useRef, useState } from "react"
import LearnMore from "../learn-more"


export default function Text() {
    const ref = useRef<any>(null)
    const [isAnimating , setIsAnimating] = useState<boolean>(false)
    const controls = useAnimation()

    const {scrollY } = useScroll({
       target:ref,
       offset:['start end','end end']
    })
   
     useMotionValueEvent(scrollY,'change',(latest)=>{
       if(latest > 1988){
        setIsAnimating(true)
       }else{
        setIsAnimating(false)
       }
       controls.start(isAnimating ? 'visible' :'hidden')
     })
   



  return (
    <motion.div 
      variants={slide}
      animate={controls}
     className="text-deep md:mt-14 mt-2 flex flex-col items-center">
        <h1 className={`${bree.className} text-lg  md:text-[1.5rem] md:leading-7 font-[700] text-center `}>Curate with Versatile Decor, Unlock Creativity</h1>
        <motion.h3 
         variants={pop}
        className="md:w-[85%] px-1  md:my-10 my-4 text-sm text-deep/70 text-center">
        Flexible decor inspires creativity, reshaping your space with curated pieces
        </motion.h3>
        <LearnMore words="Visit Shop" color="#1c2a2a"/>
    </motion.div>
  )
}

const slide = {
    visible:{
        x:0,
        opacity:1,
        transition:{
        type:'tween',
        duration:1,
        staggerChildren:0.2,
        delayChildren:0.7,
        when:'beforeChildren'
        }
    },
    hidden:{
        x:-100,
        opacity:0,
        when:'afterChildren'
    }
}

const pop = {
    visible:{
        y:0,
        opacity:1
    },
    hidden:{
        y:10,
        opacity:0
    }
}