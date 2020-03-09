import React from 'react';
const Section1 = (props) => {
    return ( <div className="bloc2">
          <div>
        <img src="logo.png"></img>
        <h5>Making the healthcare experience more human</h5>
         </div>
         <div className="text">
         <div className="p1"><p>{props.text1}</p></div>
         <div className="p2"><p>{props.text2}</p></div>
         </div>
    </div> );
}
 
export default Section1;