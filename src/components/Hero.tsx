 
import Main from "./Main"
import Navbar from "./Navbar";
import '../App.css'


function Hero() {

  return (
    <div>
        <div className="w-full h-screen relative mb-10">
          <img className="w-full h-full" src="/movieBanner.png" alt="" />  
        </div>
        <div className="absolute z-10 top-0 flex w-full text-white">
              <div>
                <Navbar/>
              </div>
              <div className="lg:w-[50%] w-full h-screen flex items-center">
              <Main/>
              </div>
        </div>
     </div>      
  )
}

export default Hero