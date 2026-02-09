import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import IF from './IF'
import HardSkills from './HardSkills'
import SoftSkills from './SoftSkills'
import Experiencias from './Experiências'
import Academico from './academico'
import CursosBootcamps from './CursosBootcamps'
import Objetivo from './Objetivo'
import Index from './Index'
import NotFound from './NotFound'


export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/IF' element={<IF/>}/>
            <Route path='/HardSkills' element={<HardSkills/>}/>
            <Route path='/SoftSkills' element={<SoftSkills/>}/>
            <Route path='/Experiencias' element={<Experiencias/>}/>
            <Route path='/Academico' element={<Academico/>}/>
            <Route path='/Objetivo' element={<Objetivo/>}/>
            <Route path='/CursosBootcamps' element={<CursosBootcamps/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

