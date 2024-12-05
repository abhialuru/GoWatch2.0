import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




function Main() {

  const navigate = useNavigate()
    
const [search, setSearch] = useState<string>();


  function  handleEnter(e:React.KeyboardEvent,path:string) {
       if (e.key==='Enter') {
        if ( search !== undefined) {
          e.preventDefault()
          navigate(path)  
        }else{
          toast.error('Please type Movie!')
        }
          
        } 
      }

      function handleEmptyInput(path:string) {
         if (search===undefined) {
           toast.error('Please type Movie')
         }else{
          console.log(search);
          navigate(path)
         }
      }

  return (
    <div className="lg:p-10 p-4 text-center mx-auto lg:text-start flex flex-col gap-8" > 
        <h1 className="lg:text-3xl text-xl font-bold text-yellow-500">Explore Your Movies Here.</h1>
        <p className="text-white text-md font-semibold hidden lg:block">At Go Watch, we believe that finding the perfect movie should be as enjoyable as watching it. Whether you’re in the mood for a heart-pounding thriller, a feel-good comedy, or an unforgettable drama, we’ve got you covered with just a few Clicks.</p>
        <p className="text-white font-semibold block lg:hidden">At Go Watch, we believe that finding the perfect movie should be as enjoyable as watching it.</p>

        <div className="lg:w-[80%] h-10 px-2 flex justify-between bg-white rounded-lg">
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} onKeyDown={(e)=>handleEnter(e,`/${search}`)} className="w-[90%] rounded-lg outline-none text-black" type="text" placeholder="search"/>
            <div className="flex justify-center items-center">
           <FaArrowRight onClick={()=>handleEmptyInput(`/${search}`)} className="text-black h-8 w-8 hover:h-12"/> 
            </div>
        </div>
    </div>
  )
}

export default Main