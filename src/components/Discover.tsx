import { useEffect, useState } from 'react';
import '../App.css'  
import { NavLink } from 'react-router-dom';


interface Items{
 poster_path: string,
 title: string
}

 function  Discover() {
 
  const[category, setCategory] = useState('popular')

  const[movies, setMovies] = useState([])
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
    }
  };
  
 useEffect(()=>{   
      fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=4d4342837949ecc63a50553c4bb6ada2&page=1`, options)
        .then(res => res.json())
        .then(res =>  setMovies(res.results))
        .catch(err => console.error(err));
 },[category])

   return (
    <div className="w-full h-screen sticky top-0 z-10">
          <div className="flex flex-col w-full text-center my-10 text-white">
          <h1 className="text-2xl font-bold p-2 ">Discover Zone!</h1>
          <p> How it Works? Simply <span className="font-semibold text-md">click the card</span> of your favourite movie to Explore!</p>
          </div>

          <div className="w-full grid grid-cols-2 gap-4 place-content-center lg:flex justify-around px-4">
            <button onClick={()=>setCategory('popular')} className="p-2 md:px-8 rounded-full bg-[#141414] borderStyle">Popular</button>
            <button onClick={()=>setCategory('top_rated')} className="p-2 md:px-8 rounded-full bg-[#141414] borderStyle">Top-Rated</button>
            <button onClick={()=>setCategory('now_playing')} className="p-2 md:px-8 rounded-full bg-[#141414] borderStyle">Now Playing</button>
            <button onClick={()=>setCategory('upcoming')} className="p-2 md:px-8 rounded-full bg-[#141414] borderStyle">Up-Coming</button>
          </div>

 
          <div className='w-[95%] h-[70%] mx-auto  flex gap-4 scroll-bar my-20'>
            {movies.map((item:Items,i:number)=>
             <NavLink to={`/${item.title}`} key={i}><div className='w-56 h-[70%] flex-shrink-0'>
                <img className='w-full h-[90%] object-fit' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                <h4>{item.title}</h4>
              </div></NavLink> 
            )}
          </div>
          </div>
         
 
   )
 }
 
 export default  Discover