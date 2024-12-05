import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom";
import '../App.css'
import Loading from "../components/Loading";

interface Movie{
    title: string | null
    poster_path: string | null
}

 
function GenrePage() {

    const [genreList, setGenreList] = useState<Movie[]>([])
    const [active, setActive] = useState<number>(1)
    const [filterType, setFilterType] = useState<string>('popularity')
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQzNDI4Mzc5NDllY2M2M2E1MDU1M2M0YmI2YWRhMiIsIm5iZiI6MTczMDk1ODc5My4wMDM4NDMsInN1YiI6IjY3MmFmYjcwMTRkNGEzOTk3MjAzNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g1i76vyKTL2JLYIy3WKQZiFpufmSjHKwxSxZv4v370Q'
        }
      };
     
     useEffect(()=>{   
           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4d4342837949ecc63a50553c4bb6ada2&with_genres=${id}&sort_by=${filterType}.desc&page=${page}`, options)
            .then(res => res.json())
          .then(res => {
              setGenreList(res.results)
              setLoading(false);
            })
            .catch(err => console.error(err));
     },[filterType, page])

     function handleActtive(id: number, typefilter: string) {
        setActive(id);
        setFilterType(typefilter)
        window.scroll({
          top:0,
          behavior: 'smooth'
        })
     }
    
     function handlePrevPage() {
      if(page !== 1){
      setPage(prev=>prev-1)
      window.scroll({
        top:0,
        behavior: 'smooth'
      })
      }
     }

     
function handleNextPage() {
    setPage(prev=>prev+1)
    window.scroll(
      {
        top: 0,
        behavior:"smooth"
      }
    )
}

     if (loading) {
        return <Loading/>
     }

  return (
    <div className="lg:p-10 w-full h-full">
    
          <div className="sticky top-4 max-w-lg mx-auto bg-[#141414] h-12 flex justify-evenly items-center rounded-3xl px-2 py-1">
              <button onClick={()=>handleActtive(1,'popularity')} className={`${active===1?'bg-[#2b2b2b]':'black'} w-[33%] h-full rounded-3xl`}>Popular</button>
              <button onClick={()=>handleActtive(2,'vote_average')} className={`${active===2?'bg-[#2b2b2b]':'black'} w-[33%] h-full rounded-3xl`}>Top-Rating</button>
              <button onClick={()=>handleActtive(3, 'release_date')} className={`${active===3?'bg-[#2b2b2b]':'black'} w-[33%] h-full rounded-3xl`}>Latest</button>
          </div>
        
          <div className="w-full max-h-fit p-10 grid md:grid-cols-4 grid-cols-2 place-items-center gap-2"> 
          {genreList.map((item,i)=> 
                <NavLink key={i} to={`/${item.title}`}>
                  <div className="lg:h-80 lg:w-64 h-52 w-36 max-h-fit">
                    <img className="h-[85%] w-full rounded-lg" src={`https://image.tmdb.org/t/p/w500`+item.poster_path} alt=" " />
                    <p className="p-2 w-full h-[25%] scroll-bar">{item.title}</p> 
                  </div> 
                </NavLink> 
          )}
    </div>  
          
      <div className="text-white max-w-fit max-h-fit mx-auto flex items-center justify-center lg:justify-normal gap-20 m-5 lg:pb-0">
            <p className="hidden lg:block">Pages</p>
            <div className="w-full flex items-center lg:justify-around">
              <button className="border-2 px-8 text-center py-1 bg-[#141414] rounded-full"   onClick={()=>handlePrevPage()} >prev</button>
              <span className="w-8 text-center">{page}</span>
              <button className="border-2 px-8 text-center py-1 bg-[#141414] rounded-full" onClick={()=>handleNextPage()}>next</button>
            </div>
           </div>
    </div>
  )
}

export default GenrePage