import React from 'react'
import { Link } from 'react-router-dom'

function CharacterMii () {
  return (
    <div className='ml-12'>
      <div className='pr-16 pl-32 pt-[170px] h-full grid grid-rows-[176px_176px_]'>
        <Link
          to='character-mii'
          className='hover:bg-BlueHight outline-wiggle hover:z-20 flex items-center px-10'
        >
          Personaje/Mii
        </Link>
        <Link
          to='blackground'
          className='hover:bg-BlueHight outline-wiggle hover:z-20 flex items-center px-10'
        >
          Fondo
        </Link>

        <div className='w-full flex justify-center items-center'>
          <button className='bg-[#01ffc9] outline-wiggle outline-offset-2 text-black rounded-lg h-32 w-[63%] '>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterMii
