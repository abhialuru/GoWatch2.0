import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

interface MovieType{
    id: number,
    poster_path: string,
    title: string,
    vote_average: number,
    overview: string,
    release_date: string,
    backdrop_path: string
}

interface CastType{
    id: number,
    original_name: string,
    known_for_department: string,
    profile_path: string,
}

interface CreditsResponse {
    cast: CastType[];
    crew: CastType[];
  }
 
function MovieDisplay() {
     
    const{movie} = useParams()
    const [specificMovie, setSpecificMovie] = useState<MovieType | undefined>()
    const[cast, setCast] = useState<CastType[] | undefined>([])
    const[crew, setCrew] = useState<CastType[] | undefined>([])
    const[loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
     
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
        }
      };

     useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d4342837949ecc63a50553c4bb6ada2&query=${movie}`, options)
            .then(res => res.json())
            .then(res => {
               if (res.results && res.results.length>0 && res.results[0].poster_path !== null) {
                setSpecificMovie(res.results[0]) 
              }else{
                setError(true)
              };
                setLoading(false)  })
            .catch(err => console.error(err))
     },[]);

     useEffect(()=>{
        if (specificMovie?.id) {
            fetch(`https://api.themoviedb.org/3/movie/${specificMovie.id}/credits?api_key=4d4342837949ecc63a50553c4bb6ada2&language=en-US`, options)
            .then(res=>res.json())
            .then((res :CreditsResponse) =>{
                const uniqueCrew =Array.from(new Map(res.crew.map((item: CastType)=>[item.id, item])).values());
                const uniqueCast =Array.from(new Map(res.cast.map((item: CastType)=>[item.id, item])).values());
                
                setCrew(uniqueCrew.slice(0,4))
                setCast(uniqueCast.slice(0,4))
            
            })
            .catch(err => console.error(err));
        }
     },[specificMovie?.id])

  if (loading) {
     return  <Loading/>
  }

  if (error) {
   return  <Error/>
  }

  return (
           <div className="w-full h-full relative">
                  <div className="absolute z-10 w-full h-80">
                    <img className="w-full h-full " src={`https://image.tmdb.org/t/p/w1280`+specificMovie?.backdrop_path} alt="" />
                  </div>


                <div className="w-full h-screen absolute z-20 md:block flex flex-col justify-around">
                      <div className="md:flex w-full md:h-[60%] p-5 md:p-10 bg-gradient-to-t from-black to-transparent">

                        
                          { specificMovie ?
                          <> 
                          <div className='md:w-[30%] w-full flex justify-center md:justify-start pt-10 pb-4 items-center'>
                          <img  className="md:w-60 md:h-72 w-40 shadow-white shadow-md" src={`https://image.tmdb.org/t/p/w500`+specificMovie.poster_path} alt="" />
                      </div>
                      <div className="md:w-[50%] flex flex-col ml-4 md:gap-3 justify-center text-[#FFFFFF] ">
                          <p><span className="font-bold text-[#FFFFFF]">Title : </span>{specificMovie.title}</p>                               
                          <p><span className="font-bold text-[#FFFFFF]">rating : </span>{(specificMovie.vote_average)}</p>
                          <p><span className="font-bold text-[#FFFFFF]">release data : </span>{specificMovie.release_date}</p>
                          <p><span className="font-bold text-[#FFFFFF]">Description : </span>{specificMovie.overview}</p>
                      </div>
              </>: <Error/>}
                          
                                  
                      </div>

                      <div className="md:px-10 px-4 flex flex-col items-baseline">
                          <h1 className="md:text-2xl text-xl font-bold md:p-4">Cast & Crew</h1>
                          <div className="flex w-full mt-5 justify-around gap-10 scroll-bar">
                              { cast? cast.map((cast:CastType, i:number)=>
                              <div key={i} className="text-center flex flex-col items-center" >
                                  <p>{cast.known_for_department}</p>
                                  <img className="md:h-20 md:w-20 w-10 h-10 rounded-[50%] bg-white" src={`https://image.tmdb.org/t/p/w500`+cast.profile_path} alt="" />
                                  <p>{cast.original_name}</p>  
                                </div> 
                              ): null}
                              { crew ? crew.map((item,i)=>
                                <div key={i}  className="text-center flex flex-col items-center">
                                  <p>{item.known_for_department}</p>
                                  <img className="md:h-20 md:w-20 w-10 h-10 rounded-[50%] bg-white" src={`https://image.tmdb.org/t/p/w500`+item.profile_path} />
                                  <p>{item.original_name}</p>
                                </div>
                              ): null

                              }
                      </div>
                      </div> 
              </div>  
    </div>
  )
}

export default MovieDisplay;