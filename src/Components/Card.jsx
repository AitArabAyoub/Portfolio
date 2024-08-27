import { AnimatePresence, motion } from "framer-motion"
import React from 'react'

function Card({project}) {
    return (
        <div className='col-12 col-lg-6 p-2'>
            <AnimatePresence>
                <motion.div class="card text-bg-dark position-relative overflow-hidden"
                    initial={{transform : "scale(0)"}}
                    animate={{transform : "scale(1)"}}
                    transition={{damping : 8,type : "spring",stiffness : 100}}
                >
                    <div>
                        <img src={project.image} class="card-img" alt="..."/>
                    </div>
                    <div class="card-img-overlay overlay">
                        <h5 class="card-title">{project.title}</h5>
                        <p>{project.desc}</p>
                        <a target="_blank" rel="noopener noreferrer" href={project.link} className="btn btn-outline-light  ">Visit</a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Card
