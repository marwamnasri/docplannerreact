import React from 'react';
const images=[
    {
        class:'m1',
        img: 'f1.png',
        titre:'Warsaw',
        button:'\<button value="see opnenning"></button>'
    },
    {
        class:'m1',
        img: 'f2.png',
        titre:'Barcelona',
        button:'\<button value="see opnenning"></button>'
    },
    {
        class:'m1',
        img: 'f3.png',
        titre:'Istanbul',
        button:'\<button value="see opnenning"></button>'
    },
    {
        class:'m1',
        img: 'f4.png',
        titre:'Rome',
        value:'SEE OPENING'
        
    },
    {
        class:'m1',
        img: 'f5.png',
        titre:'Mexico',
        value:'SEE OPENING'
        
    },
    {
        class:'m1',
        img: 'f6.png',
        titre:'Curitiba',
        value:'SEE OPENING'
        
    }
]



const Section4 = (props) => {
    return ( <div>
        <div className="h1"><span>Improve the lives of millions. Change yours forever</span>
            <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p></div>
    <div className="y2">{images.map((el,i) => {
        return(<div className={el.class} key={i}>
            <img src={el.img}/>
            <span>{el.titre}</span>
        <button className="bb">SEE OPENING</button>

        </div>

        )
    }

    )}
    </div>
    </div>)
}
export default Section4;