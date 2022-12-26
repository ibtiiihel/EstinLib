import React from 'react'
import { useState } from 'react';
import "./Module.css"

const ESTIN1CP = () => {
    const [show1,toggleshow1] = useState(true) ;
    const [show2,toggleshow2] = useState(true) ;

  return (
    <div className='body'>
      <div className='level'>
        
        <h2 className='title' id='CP1'>
          1CP
        </h2>



        <div className="categorie">



         <div>
             <div className='semestre'> Semestre 1 </div>

              <div className="module">
                    <img src='./img/shape7.svg'></img> 
                    <p>Module</p>

                    <button  onClick={() => toggleshow1 (!show1)}>
                    {show1 ?  <img src="./img/up.svg" className='down'/> : <img src="./img/down.svg" className='down'/> }
                   </button> 
             </div>


              {show1 &&  
             <div className="moduledetails">
                <a href='/'> COURS </a> 
                <a href='/'> TD </a> 
                <a href='/'> EXAMEN </a> 
                <a href='/'> AUTRES </a> 
                       
             </div>
              }
         </div>




        <div>
           <div className='semestre'> Semestre 2 </div>
           <div className="module">
               <img src='./img/shape7.svg' ></img> 
               <p>Module</p>
             <button  onClick={() => toggleshow2 (!show2)}>
                  {show2 ?  <img src="./img/up.svg" className='down'/> : <img src="./img/down.svg" className='down'/> }
              </button>
           </div>
            {show2 &&  
            <div className="moduledetails">
            <a href='/'> COURS </a> 
            <a href='/'> TD </a> 
            <a href='/'> EXAMEN </a> 
            <a href='/'> AUTRES </a> 
                   
         </div>
           }
        </div>
        </div>
        









      </div>
    </div>
  )
}

export default ESTIN1CP