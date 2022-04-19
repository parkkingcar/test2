import React from 'react';
import {useState } from "react";

const Imf = ({users}) => {
    const [name, setName] = useState("j");
    console.log(users)
    setName(users)
    return(
        
        <div>
            
            {/* {users&&users.result.map((result) =>{
                return(
                <div className = "comment" key={result.name}>
                 이름 : {result.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                 회신주소 : {result.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                 내용 : {result.username}<br/>
                 <br/>
                </div>
                
                )
            })} */}
        {users&&users.map(users=>(
                <li key = {users.id}>
                    {users.username} ({users.name})
                </li>
            ))}

        
        imf
            
            

        </div>
        
    );
};

export default Imf;