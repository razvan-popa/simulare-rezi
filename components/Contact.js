import React from 'react'

export default function Contact(props) {
  return (
    <a href={'tel:' + props.phone} className='bg-fsmdr border border-fsmdr transform hover:scale-105 hover:bg-white hover:text-[#25afb4] p-2 rounded-md text-white transition ease-in-out'>
        <p> {props.phone} • <span className='font-semibold'>{props.role}</span> • {props.name} </p>
    </a>
  )
}
