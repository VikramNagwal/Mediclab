import {HiBars3} from 'react-icons/hi2'
import { useState } from 'react';

const Navbar = () => {

  const [click, setClick] = useState(false);
  console.log(click)

  return (
    <div className="p-4 bg-slate-100 mb-4"> 
    <div className="flex justify-between items-center max-w-[1280px] mx-auto py-2">
        <p className="text-2xl md:text-3xl text-blue-950 font-bold">mediclab<span className="text-red-900">.</span></p>

<div className='flex justify-between items-center'>
        <button className="rounded-full mx-6 text-white px-3 py-2 bg-blue-700 capitalize">contact us</button>
        <HiBars3 size={30} onClick={() => setClick((prev) => !prev)}/>
        </div>
    </div>
    <div className='text-center py-4'>
        <ul className={!click?`hidden `:`flex flex-col capitalize text-lg font-semibold`}>
        <li className="mx-3 py-2 cursor-pointer">about us</li>
        <li className="mx-3 py-2 cursor-pointer">services</li>
        <li className="mx-3 py-2 cursor-pointer">features</li>
        <li className="mx-3 py-2 cursor-pointer">testimonials</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar