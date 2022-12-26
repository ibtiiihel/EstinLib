import React, { useState } from 'react'
import './Rec.css'
import './Part_semestre'
import Part_semestre from './Part_semestre'
export default function Rec() {

  
  return (
    <div className='card'>
        <h2 className='title'>1cp</h2>
        <div className='cp1'>
          <Part_semestre />
          <Part_semestre />
        </div>
    </div>
  )
  }