import React from 'react';
const carreaux=[{
    class:'c1',
    im:'icon1.png',
    titre: 'Leader in 10 countries',
    p:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile.'
  },
  {
    class:'c2',
    im:'icon2.png',
    titre: '1.5 million appointments',
    p:'booked last month'
      
  },
  {
    class:'c3',
    im:'icon3.png',
    titre: '30 million unique patients',
    p:'visit us every month.'
  },
  {
    class:'c4',
    im:'icon4.png',
    titre: '2 million active doctors',
    p:'trust in our solutions.'
  }
]
const Section3 = (props) => {
    return ( <div className="l1">
    <div className="bloc5">
        <span>{props.t1}</span>
        <p>{props.p3}</p>
        <img src={props.images4}/>

        </div>
        <div className="y1" >
       {carreaux.map((el,i)=> {return (<div className={el.class} key={i} >
       <img src={el.im}/>
       <span>{el.titre}</span>
       <p>{el.p}</p>

       </div>

       ) } ) }
          

            
        </div>
    
    </div>);
}
export default Section3;