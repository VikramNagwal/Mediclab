
const Footer = () => {
  return (
    <div className="capitalize p-4">
      <div className="flex items-center justify-between border-b-black border-b-2 capitalize font-semibold py-4 px-6">
     
      <ul className="text-lg flex justify-between items-center w-full md:px-8 md:mx-8">
      <h2 className="hidden md:block text-xl font-semibold underline">follow us on</h2>
      <li className="cursor-pointer p-2 rounded-md bg-blue-400 text-white">twitter</li>
      <li className="bg-pink-500 rounded-md cursor-pointer p-2 text-white">instagram</li>
      <li className="bg-blue-500 rounded-md p-2 cursor-pointer text-white">facebook</li>
      </ul>
      </div>
      <p className="text-lg pt-2 text-left px-4 font-semibold opacity-70">made by vikram singh</p>
    </div>
  )
}

export default Footer
