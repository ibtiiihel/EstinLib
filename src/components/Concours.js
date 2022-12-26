import React from 'react'
import { useState } from 'react';
import "./Module.css"

const Concours = () => {
    const [show1,toggleshow1] = useState(true) ;
    const [show2,toggleshow2] = useState(true) ;

  return (
    <div>
      <div className='level'>
        
        <h2 className='title'>
          CONCOURS
        </h2>



        <div className="categorie">



         <div>
             <div className='semestre'> CONCOURS </div>

              <div className="module">
                    <img src='./img/shape7.svg'></img> 
                    <p>RESSOURCES</p>

                    <button  onClick={() => toggleshow1 (!show1)}>
                    {show1 ?  <img src="./img/up.svg" className='down'/> : <img src="./img/down.svg" className='down'/> }
                   </button> 
             </div>


              {show1 &&  
             <div className="moduledetails">
                <a href='/'> COURS </a> 
                <a href='/'> TD </a> 
                <a href='/'> RESUMES </a> 
                <a href='/'> CONCOURS </a> 
                       
             </div>
              }
         </div>




        <div>
          
        </div>
        </div>
        









      </div>
    </div>
  )
}

export default Concours
