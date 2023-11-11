import {BsPeopleFill} from 'react-icons/bs'

const Docprofile = () => {

  
  return (
    <div>
    <div className='capitalize px-6 mx-auto flex flex-col md:flex-row justify-between items-center'>
      <div className='rounded-md my-4 mx-6'>
      <img className="rounded-md" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className='flex flex-col justify-between px-6 py-4 text-lg md:text-xl'>
      <p className='text-4xl md:text-6xl text-center md:text-start font-semibold'>highly qualified specialists.</p>
      <div className='py-4 flex items-center flex-col justify-between my-4'>
      <BsPeopleFill color='white' size={60} className='p-4 rounded-full bg-pink-400'/>
        <p className='text-center'><span className='text-lg font-semibold'>staff training</span><br/>continually trains its specialists abroad</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Docprofile
