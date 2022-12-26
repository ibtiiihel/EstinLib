import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div class="bottom-page">
        <div class="first-part">
            <div class="left-column">
                <div class="collect-content">
                    <div class="content">
                        <p>“Sharing is caring”</p>
                        <button className='contribuer'>Contribuer<a href=""></a></button>
                    </div>
                    <div class="content">
                      
                        <div class="social-img">
                            <img src="./img/linkdin.svg" alt=""/>
                            <img src="./img/insta.svg" alt=""/>
                            <img src="./img/fb.svg" alt=""/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="right-column">
                <form class="content">
                    <h2>Contact us</h2>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea name="" id="" placeholder="Message"></textarea>
                    <button>Send<a href=""></a></button>
                </form>
            </div>
        </div>
        
        <img class="second-part" src="./img/estin.svg" alt=""/>
        <div class="third-part">

            <p>Made by</p>
            <img src="./img/gdsc-tall.svg" alt="" class="img"/>
        </div>
    </div>
    </div>
  )
}

export default Footer
