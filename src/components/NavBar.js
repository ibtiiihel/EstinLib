import React from 'react'
import './NavBar.css'
export default function NavBar() {
  return (
    <div className='nav'>
        <div>
        <img src="../img/logo.svg" alt="" class="logo"></img>
        <div className='nav_info'>
        <nav>
            <ul class="nav_links">
                <li href="#"><a>Accueil</a></li>
                <li href='#CP1'><a>1cp</a></li>
                <li href="#2CP"><a>2cp</a></li>
                <li href="#1CS"><a>1cs</a></li>
                <li href="#2CS"><a>2cs</a></li>
                <li href="#3CS"><a>3cs</a></li>
            </ul>
            
        </nav>
        <a href="#" className="cta"><button>Contribuer</button></a>
        </div>
    </div>
    </div>
  )
}
