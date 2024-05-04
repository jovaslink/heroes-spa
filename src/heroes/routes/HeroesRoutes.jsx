import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage, DcPage, HeroeByIdPage,SearchPage,HeroPage } from "../pages"
import { Navbar } from "../../ui/Navbar"



export const HeroesRoutes = () => {
  return (
   <>
    <Navbar/>
      <div className="container">
              
          <Routes>
              <Route path="marvel" element={<MarvelPage/>}/>
              <Route path="dc" element={<DcPage/>}/>
              <Route path="heroebyid" element={<HeroeByIdPage/>}/>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="heroe/:id" element={<HeroPage />} />
              <Route path="/*" element={<Navigate to='login'/>}/>
          </Routes>
      
      
        </div>
    </>
  )
}
