import React, {useEffect, useState} from 'react';
import "./daynight.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {ProgressBar} from './ProgressBar.jsx';
const Daynight = () =>{
    const [time,setTime] = useState("");
    const handleClick = (k) =>{
        setTime(k)
    }
    const postdata = (props) => {
        console.log("post",props);
        const url = 'pushTimeScent?time='+props
        // console.log(fq);
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        
        axios.patch(url,JSON.stringify({
          time: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };

    return(
        <div className = "daynight_outer">
            <div className = "daynight_inner">
                <div className = "q4">Day or Night?</div>
                <div className = "q4_content">
                <Link to="/Price">
                <div className = "day_img" onClick = {()=>{
                    setTimeout(()=>console.log("delay"),1000)
                    console.log("day")
                    // handleClick("day")
                    postdata(1)
                    
                }}>
                <img
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsptjCxAcUVRl-WksAfih6ptuElitdGXfa0w&usqp=CAU"
                width = "100%"
                height = "100%"
                >
                </img>
                </div>
                </Link>
                <Link to="/Price">
                <div className = "night_img" onClick = {()=>{
                    console.log("night")
                    // handleClick("night")
                    
                    postdata(2)
                }}>
                <img
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY01_iQogJHyu1F5aGmpQs1h093bK-DJU15Q&usqp=CAU"
                width = "100%"
                height = "100%"
                >
                </img>
                </div>
                </Link>
                </div>
                <br/>
                <br/>
                <div className = "pb">
                <ProgressBar width={400} percent={0.6} pre = {0.4} />
                </div>
            </div>
        </div>
    )
}

export default Daynight;