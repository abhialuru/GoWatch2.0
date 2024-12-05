import { NavLink } from 'react-router-dom'
import '../App.css' 
import { useState } from 'react'

function GenreDisplay() {

 const[rotate, setRotate] = useState(true);

  return (
    <div className="w-full h-screen"> 
  
    <div className='w-full md:h-full h-full'>
        <div className="flex flex-col w-full text-center mb-10 text-white  ">
        <h1 className="text-2xl font-bold p-2 ">Genre Zone!</h1>
        <p> How it Works? Simply <span className="font-semibold text-md">click the card</span> of your favourite genre to Explore!</p>
        </div>

        <div className="w-full h-[50%] md:h-[75%] flex justify-center relative overflow-hidden ">
            <div className={`${rotate?'absolute z-20 h-32 w-24 image-slider':'hidden'}`} style={{'--quantity': 8} as React.CSSProperties}>
                <div className="h-full w-full absolute top-0 item" style={{'--position': 3} as React.CSSProperties}><NavLink to='/genre/10749'><img className="h-full" src="/genre/romance-flux.png" alt="" /></NavLink>  </div> 
                <div className="h-full w-full absolute top-0 item" style={{'--position': 4} as React.CSSProperties}><NavLink to='/genre/18'><img className="h-full" src="/genre/drama.jpg" alt="" /></NavLink>  </div>   
                <div className="h-full w-full absolute top-0 item" style={{'--position': 1} as React.CSSProperties}><NavLink to='/genre/28'><img className="h-full" src="/genre/action.jpg" alt="" /></NavLink>  </div>
                <div className="h-full w-full absolute top-0 item" style={{'--position': 5} as React.CSSProperties}><NavLink to='/genre/35'><img className="h-full" src="/genre/comedy.jpg" alt="" /></NavLink>  </div>  
                <div className="h-full w-full absolute top-0 item" style={{'--position': 2} as React.CSSProperties}><NavLink to='/genre/878'><img className="h-full" src="/genre/sci-fi.jpg" alt="" /></NavLink>  </div>    
                <div className="h-full w-full absolute top-0 item" style={{'--position': 7} as React.CSSProperties}><NavLink to='/genre/27'><img className="h-full" src="/genre/Horror.jpg" alt="" /></NavLink>  </div>
                <div className="h-full w-full absolute top-0 item" style={{'--position': 8} as React.CSSProperties}><NavLink to='/genre/99'><img className="h-full" src="/genre/documentary.jpg" alt="" /></NavLink>  </div>  
                <div className="h-full w-full absolute top-0 item" style={{'--position': 6} as React.CSSProperties}><NavLink to='/genre/80'><img className="h-full" src="/genre/crime.jpg" alt="" /></NavLink>  </div>  
             </div>

             <div className={`${rotate?'hidden':'md:flex grid grid-cols-4 h-40 gap-2 p-1 w-full list'}  `}  >
                <div className="h-full w-full items"><NavLink to='/genre/10749'><img className="h-full" src="/genre/romance-flux.png" alt="" /></NavLink>  </div> 
                <div className="h-full w-full item"><NavLink to='/genre/18'><img className="h-full" src="/genre/drama.jpg" alt="" /></NavLink>  </div>   
                <div className="h-full w-full item"><NavLink to='/genre/28'><img className="h-full" src="/genre/action.jpg" alt="" /></NavLink>  </div>
                <div className="h-full w-full item"><NavLink to='/genre/35'><img className="h-full" src="/genre/comedy.jpg" alt="" /></NavLink>  </div>  
                <div className="h-full w-full item"><NavLink to='/genre/878'><img className="h-full" src="/genre/sci-fi.jpg" alt="" /></NavLink>  </div>    
                <div className="h-full w-full item"><NavLink to='/genre/27'><img className="h-full" src="/genre/Horror.jpg" alt="" /></NavLink>  </div>
                <div className="h-full w-full item"><NavLink to='/genre/99'><img className="h-full" src="/genre/documentary.jpg" alt="" /></NavLink>  </div>  
                <div className="h-full w-full items"><NavLink to='/genre/80'><img className="h-full" src="/genre/crime.jpg" alt="" /></NavLink>  </div>  
             </div>

             <div className='md:w-[80%] w-full p-3 h-40 mx-auto flex justify-between absolute top-60 items-center'>
        <button onClick={()=>setRotate(true)} className='text-white px-10 py-2 rounded-full bg-[#1A1A1A] hover:px-12 hover:py-3  '>start</button>
        <button onClick={()=>setRotate(false)} className='text-white px-10 py-2 rounded-full bg-[#1A1A1A]  hover:px-12 hover:py-3  '>stop</button>
        </div>

           <div className='absolute z-10 w-28 min-h-fit top-28'>
            <img className='object-cover' src="/genre/anime-guy.jpg" alt="" /></div>
          </div>

   <div className='md:hidden w-full p-5 flex flex-col gap-4'>

      <h1 className='underline underline-offset-4 under decoration-2'>About Us</h1>
      <div>
      <p>Welcome to <span className='text-yellow-500 font-bold'>GoWatch</span>,</p>
      <p> we help you discover the perfect movie with personalized recommendations based on genre, ratings, and popularity. Easily explore top-rated films, the latest releases, and more, all tailored to your preferences for an effortless movie experience.</p> 
      </div>
 </div>

        </div>
     
    </div>
  )
}

export default GenreDisplay