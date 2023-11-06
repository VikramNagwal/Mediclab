const Services = () => {
  return (
    <div className="capitalize bg-slate-200 py-4 px-6">
    <p className="text-2xl text-blue-700 mb-6 text-center font-semibold py-4">our services</p>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto">
        <img src="https://images.pexels.com/photos/7088486/pexels-photo-7088486.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="rounded-xl md:w-[500px] h-auto my-2"/>
        <div className="text-center w-[400px] flex flex-col justify-between h-[300px] p-2">
        <p className="font-semibold py-6 px-4 bg-slate-400 rounded-md text-xl text-white">neurosurgery</p>
        <p className="px-4 font-semibold py-2 text-lg">cardiologist</p>
        <p className="px-4 font-semibold py-2 text-lg">radiology</p>
        <p className="px-4 font-semibold py-2 text-lg">therapy</p>
        </div>
      </div>
    </div>
  )
}

export default Services
