import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GenreDisplay from "./components/GenreDisplay"
import Hero from "./components/Hero"
import GenrePage from "./pages/GenrePage"
import MovieDisplay from "./pages/MovieDisplay"
import Discover from "./components/Discover"
import Contact from "./components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
 
 function App() {
    
   
  const Layout = () => {
    return (
      <div> 
           <Hero/>
           <GenreDisplay/>
           <Discover/>
            <Contact/> 
      </div>
    )
  }
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>
    },
    {
      path: '/genre/:id',
      element: <GenrePage/>
    },
    {
      path: '/:movie',
      element: <MovieDisplay/>
    }
  ])
   return (
     <div>
      <ToastContainer />
    <RouterProvider router={router} />
      </div>
   )
 }
 
 export default App