import { NavLink } from "react-router-dom"

 
function Error() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
         <span className="relative text-[#141414] font-semibold hidden lg:block" style={{fontSize: '15vw'}}>404</span>
         <span className="relative text-[#141414] block lg:hidden font-semibold" style={{fontSize: '50vw'}}>404</span>
         <span className="absolute z-10">Page Not Found</span>
     <NavLink to='/' className='absolute mt-36'><button className="bg-[#141414] px-6 p-2 border-2 rounded-lg hover:p-3 hover:px-7">Home Page</button></NavLink>    
  </div>
  )
}

export default Error