import React from 'react';
import "./result.css";


const Result = () =>{
    
    return (
        <div className= "result_outer">
          <div className = "result_inner">
            
            <div className = "result">Result</div>
      
        
          <div className="result_all">
           
            <div className="im">
              <h2>CHANEL NO 5</h2>

              <p>
              Do not spoil what you have by desiring what you have not; 
              but remember that what you now have was once among the things you only hoped for.
              당신은 이러이러한 이미지시 군요!


              </p>
              <br/>
              
              <div className="row">
                <div className="columns contact-details">
                  <h2>당신의 향 타입</h2>
                  <p className="address">
                    <span>향수 이름</span>
                    <br />
                    <br />
                    <span>
                      가격
                      <br />
                      <br />
                      판매처
                      <br />
                      
                    </span>
                    <br />
                    <span>평점</span>
                    <br />
                    <br />
                    <span>향수 정보</span>
                    <br />
                    <br />
                    <span>베이스 노트</span>
                  </p>
                </div>
                
              </div>
            </div>
            <div className = "result_img">
              <img
                
                src="https://www.trndf.com/news/data/20190709/p1065591406141189_714_thum.jpg"
                width="100%"
                height = "100%"
              />
            </div>
          </div>
          
        
    
          </div>
    </div>
        

        
        
        
    );
    
}


export default Result;