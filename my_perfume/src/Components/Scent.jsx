import React,{useEffect, useState} from 'react';
import "./scent.css";
import {Link} from "react-router-dom"
import axios from "axios";
import {ProgressBar} from './ProgressBar.jsx';
const Scent = () =>{
    const postdata = (props) => {
        console.log("post",props);
        const url = 'pushTimeScent?scent='+props
        // console.log(fq);
        // axios.post(url,user, {header: {"Content-Type": 'application/json'}},{params:{adminIdx:1}}).then((response)=>console.log(response));
        
        axios.patch(url,JSON.stringify({
          scent: props
        }),
        {
          headers: 
          {"Content-Type": 'application/json'}
        }
        ).then((response) => console.log(response));
      };
    return(
        <div className = "scent_outer">
            <div className = "scent_inner">
                <div className = "q2"> 어떤 향기를 좋아하시나요? </div>
                <div className = "q2_content">
                <div className ="content_1">
                    <Link to = "/Daynight">
                        <div className = "woody" onClick = {()=>{
                            console.log("woody")
                            postdata(1)
                            }}>
                            <img
                            src = "https://www.cmn.co.kr/webupload/ckeditor/images/20200827_134035_0068447.jpg"
                            width="100%"
                            height = "80%"
                            >
                            </img>
                            우디향
                    
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "floral" onClick = {()=>{console.log("floral")
                            postdata(2)
                                }}>
                            <img
                            src = "https://mblogthumb-phinf.pstatic.net/20150319_92/annickgoutal_1426730347929w6rNH_JPEG/%BD%BA%C0%A7%C6%AE%C7%C3%B7%CE%B7%B2.jpg?type=w2"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            플로럴 향
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "arabian" onClick = {()=>{console.log("arabian")
                            postdata(3)
                            }}>
                            <img
                            src = "https://t1.daumcdn.net/cfile/tistory/997337475AFD41F827"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            아라비안 향
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "oriental" onClick = {()=>{console.log("oriental")
                    
                            postdata(4)
                            }}>
                            <img
                            src = "https://t1.daumcdn.net/cfile/tistory/1909D63F50E521831A"
                            
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            오리엔탈 향
                        </div>
                    </Link>
                    
                </div>
                <div className ="content_2">
                    <Link to = "/Daynight">
                        <div className = "fruity" onClick = {()=>{console.log("fruity")
                            postdata(5)
                            }}>
                            <img
                            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySDz8xR885DjpHa-nB39M_Ytp_GB_eMYLQA&usqp=CAU"
                            width="100%"
                            height = "80%"
                            >
                            </img>
                            프루티 향
                    
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "fresh" onClick = {()=>{console.log("fresh")
                            postdata(6)
                            }}>
                            <img
                            src = "https://img.hankyung.com/photo/201406/01.8774165.1.jpg"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            프레쉬 향
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "citrus" onClick = {()=>{console.log("citrus")
                            postdata(7)
                            }}>
                            <img
                            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeQCsgwdC3cNb-rQlT4f8clT78TTl2TCVGg&usqp=CAU"
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            시트러스 향
                        </div>
                    </Link>
                    <Link to = "/Daynight">
                        <div className = "musk" onClick = {()=>{console.log("musk")
                            postdata(8)
                            }}>
                            <img
                            src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo1gcojD5E-ydhRmhnHAEqGwss4hVA5K6RA&usqp=CAU"
                            
                            width = "100%"
                            height = "80%"
                            >
                            </img>
                            머스크 향
                        </div>
                    </Link>
                   
                </div>
                <div className = "pb">
                <ProgressBar width={400} percent={0.4} pre = {0.2}/>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Scent;