import React, { useState, useEffect } from 'react'
import bg from '../assets/bg.jpg'
import { Navbar, SavedShows } from '../components'

const Account = () => {
    return (
        <>
            <div className='relative'>
                <img className='w-full h-[400px] object-cover' src={bg} alt="bg" />
                <Navbar ClassName={'absolute top-0 lef-0'} />
            </div>
            <div className='flex flex-col p-4'>
                <h2 className='text-white font-bold md:text-xl pt-4 px-4 pb-1 mb-2 capitalize'>my shows</h2>
                <div>
                    <SavedShows />
                </div>
            </div>
        </>
    )
}

export default Account