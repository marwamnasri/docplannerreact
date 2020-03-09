import React from 'react';
const Section2 = (props) => {
    return ( <div>
          <div className="bloc3">
        <div className="bl1">
               <span>{props.titre1}</span>
               <p>{props.p}</p>
            
            <div className="carr">
              <div className="select">
                  <select>
                  <option>Choose Country</option>
                   <option>France</option>
                   <option>Italy</option>
                  <option>Poland</option>
                   <option>Mexico</option>
                   </select>
                </div>
                <div className="images">
                   <img src={props.images}/>
                 </div>
            </div>
            </div>
        <div className="bl2">
            <span>{props.title}</span>
            <p>{props.p2}</p>
            <img src={props.images1}/>
        </div>
        </div>
        <div className="bloc4">
            <div className="p3">
            <p>We are a global company with local culture</p></div>
            <div className="p4">
            <ul>
                <li><a href="#"><i class="fas fa-star"></i>ZnanyLekraz</a></li>
                <li><a href="#"><i class="fas fa-star"></i>Doctoralia</a></li>
                <li><a href="#"><i class="fas fa-star"></i>MioDotoro</a></li>
                <li><a href="#"><i class="fas fa-star"></i>DoktorTakvimi</a></li>
                <li><a href="#"><i class="fas fa-star"></i>ZnamyLekar</a></li>
            </ul></div>
        </div>
    </div> );
}
 
export default Section2;