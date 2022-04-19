import React from 'react';
import "./blank.css";
import {Link} from "react-router-dom";
import axios from "axios";
const Blank = () =>{
    const postdata = (props) => {
        console.log("post",props);
        
        // console.log(fq);
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        
        axios.post('http://api.1971artist.com:3000/contacts/1',JSON.stringify({
          blank: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };

    return(
        <div className = "blank_outer">
            <div className = "blank_inner">
                <div className = "q5">question?</div>
                    <div className = "q5_content">
                        <Link to="/Analyzing">
                            <div className = "a_img" onClick = {()=>{console.log("A")
                                postdata("A")
                            }}>A</div>
                        </Link>
                        <Link to="/Analyzing">
                        <div className = "b_img" onClick = {()=>{console.log("B")
                                postdata("B")
                    }}>B</div>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Blank;