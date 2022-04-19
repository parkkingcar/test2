import React, {useEffect, useState}from 'react';
import "./price.css";
import {Link, Router} from "react-router-dom"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {ProgressBar} from './ProgressBar.jsx';

const Price = () =>{
    let perfume_pprice = "0";
    let a = "result";
    const navigate = useNavigate();
    const [perfume_price, setprice] = useState();
    const handleSubmit = e =>{
        
        e.preventDefault();
        perfume_pprice = e.target.price.value; 
        //setprice(e.target.price.value);
        //console.log(e.target.price.value);
        
        //console.log(perfume_pprice);
        postdata(perfume_pprice);
        postresult(a);
        nav();
        

    };

    const nav = ()=>{
        navigate("/Analyzing");
    }
    const postresult = (props) => {
        console.log("post",props);
        const url = '/version3'
       // console.log(JSON.stringify({price:perfume_price}))
       
       // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
       
       axios.post(url
    //     ,JSON.stringify({
    //      price: props
    //    })
       ,
       {
         headers: 
         {"Content-Type": 'application/json'}
       }
       ).then((response) => console.log(response));
     };
 
    // const moveRoute = ()=>{
    //     useRouter.push("/Daynight")
    // }
    const postdata = (props) => {
         console.log("post",props);
         const url = '/pushPrice?priceRange='+props
        // console.log(JSON.stringify({price:perfume_price}))
        
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        
        axios.patch(url,JSON.stringify({
          price: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };
    return(
        <div className= "price_outer">
            <div className = "price_inner">
                <div className = "q3">가격대를 고르세요</div>
                
                <form className="form" 
                        
                        onSubmit={function(event){
                            setprice(event.target.price.value);
                            handleSubmit(event);
                        }}                   
                    
                    >
                    <div className = "question" >
                    <input type = "radio" id = "one" name = "price" value = "1"required/>
                    <label htmlFor = "one">0~60000</label><br/>
                    <input type = "radio" id = "two" name = "price" value = "2"required/>
                    <label htmlFor = "two">60000~120000</label><br/>
                    <input type = "radio" id = "three" name = "price" value = "3"required/>
                    <label htmlFor = "three">120000~180000</label><br/>
                    <input type = "radio" id = "four" name = "price" value = "4"required/>
                    <label htmlFor = "four">180000~240000</label><br/>
                    <input type = "radio" id = "five" name = "price" value = "5"required/>
                    <label htmlFor = "five">240000</label><br/>
                    {/* <Link to = "/Daynight"> */}
                    <input type = "submit" value = "다음으로" onClick ={function(event){
                        console.log("click")
                       
                        
                        
                        
                        
                        
                    }}required/>
                    {/* </Link> */}
                    </div>

                </form>
                <br/><br/>
                <div className = "pb">
                <ProgressBar width={400} percent={0.8} pre = {0.6}/>
                </div>
            </div>
        </div>
    )
}

export default Price;