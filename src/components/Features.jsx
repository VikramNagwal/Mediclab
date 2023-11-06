import {BsTrophyFill,BsShieldFill} from 'react-icons/bs'

const Features = () => {
  return (
    <div className="capitalize py-8 my-6 px-4">
    <p className="text-blue-600 text-center font-semibold text-2xl py-2">features</p>
      <div className='px-4'>
        <p className="text-3xl my-4 text-center py-4 font-bold flex-wrap">why you should choose our clinic ?</p>
        <div className='flex md:flex-row flex-col justify-between'>
        <img src="https://images.unsplash.com/photo-1666214280391-c9ef08d09da8?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lZGljYWwlMjBtYWNoaW5lc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='rounded-md flex-wrap md:w-[60%]'/>
        <div className='flex flex-col justify-between px-2 py-4'>
        <p className="text-xl font-bold my-6 flex-wrap text-pink-500 text-center">modern medical equipment and supplies</p>
        <div className='flex flex-col justify-between p-2 h-[300px]'>
       <p><BsTrophyFill size={50} color='white' className='p-2  border bg-pink-500 rounded-md'/><span className=' text-lg py-2 font-semibold'>high-quality equipments</span><br/>treatment using most reliable and modern equipment in todays world</p> 
        <p><BsShieldFill size={50} color='white' className='p-2 border bg-pink-500 rounded-md'/><span className='text-lg py-2 font-semibold'>supply of treatment</span><br/>medical treatment undergo sterilization treatment</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Features
