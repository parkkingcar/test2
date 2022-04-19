import React from 'react';
import "./main.css";
import {Link} from "react-router-dom" 
import { motion , AnimatePresence} from "framer-motion"
const Main = () =>{
    const variants = {
        
        hidden:{opacity:0},
        visible: {opacity:1},
        exit:{opacity:0},
        
    }
    return (
        
        <div >
            

            <div className = "main_title">PERFUME</div>
            
            <AnimatePresence>
                <motion.div>
            <motion.img
                initial = "hidden"
                animate = "visible"
                variants={variants}
                
                className="main_img"
                src = "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
            />
                  
            </motion.div>

            </AnimatePresence>
            
            {/* </img> */}
            <br></br>
            <div className="container ">
                <Link to="/Firstquestion">
                <button type="button" className = "start_btn custom-btn btn-8" onClick={()=>{
                    console.log("click")
                }}>
                    {/* <img className="img_btn" src="https://img.freepik.com/free-vector/play-button-on-white-background_97458-84.jpg?w=1380"/> */}
            
                <span>Start</span>
                </button>
                </Link>
            </div>
            
        </div>
        

        
        
        
    );
    
}


export default Main;