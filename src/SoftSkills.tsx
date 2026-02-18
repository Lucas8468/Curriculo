{/* Importando os Hooks necessários para a aplicação */}
import { useEffect, useState } from 'react'

{/* Importando o css para a aplicação */}
import './index.css'

import { Link } from 'react-router-dom';

{/* Componente que contém os arquivos principais da Aplicação */}
export default function SoftSkills(){

{/* Utilizando UseState para Aplicar a Tradução no estado do elemento */}
  const [Traduzir, setTraduzir]=useState(()=>{
    const Save = localStorage.getItem('Key 4')
    return Save ? JSON.parse(Save) : true
      })

{/* Aplicando o localstorage no UseState do Menu */}      
  const [Menu, setMenu]=useState(()=>{
    const save2 = localStorage.getItem('fun')
    return save2 ? JSON.parse(save2) : true
  })   

{/* Aplicando o localstorage no UseState da Alteração de modo Diurno e Noturno */}   
  const [Modos, setModos]=useState(()=>{
    const save3 = localStorage.getItem('AlterarModo')
    return save3 ? JSON.parse(save3) : true
  })

{/* Utilizando o UseEffect para configurar o localStorage e o Tittle da página */}
      useEffect(()=>{
          localStorage.setItem('Key 4', JSON.stringify(Traduzir))
          localStorage.setItem('fun', JSON.stringify(Menu))
          localStorage.setItem('AlterarModo', JSON.stringify(Modos))
          document.title = 'SoftSkills'          
      })
    return(
        <>
        {/* Utilizando a Tag Body para alterar o Modo Noturno/Diurno */}
    <body className={Modos? 'Back1':'Back2'}>

      {/* Div que contém o Menu de configurações */}  
      <div>
        <button style={{border: Modos? 'solid white 1px': 'solid black 1px'}} className="buttonMenu" onClick={()=>setMenu(!Menu)}>
          <img className="Menu" src="/menu-hamburguer.png" alt="Menu Hamburguer"/>
        </button>
        <div style={{backgroundColor: Modos? '#0f313b':'#01647d'}} className={Menu? 'NavbarVertical1':'NavbarVertical2'}>
            {Menu?<h1 className={Modos? 'h1ConfigNoturno':'h1ConfigDiurno'}>{Traduzir? 'Configurações': 'Settings'}</h1>: null}
            {Menu?<button style={{marginLeft: Traduzir? '':'-90px'}} className='ButtonTradutor' onClick={()=>setTraduzir(!Traduzir)} type='button'>{Traduzir?'Inglês':'Português'}</button>: null}
            {Menu?<button className="ButtonModos" onClick={()=>setModos(!Modos)}>{Traduzir? 'Alterar tema': 'change theme'}</button>:null}
        </div>
      </div>

      {/* Navbar para filtrar pela sessão desejada do currículo */}
      <nav className={Modos?'NavbarPosition1':'NavbarPosition2'}>
         <Link to="/">
           <button accessKey='C' className='ButtonNavBar1' type="button">{Traduzir ? 'Complementar' : 'All'}</button>
        </Link>
        <Link to="/if">
          <button accessKey='I' className='ButtonNavBar2' type='button'>{Traduzir ? 'Informações essenciais' : 'essential information'}</button>
        </Link>
        <Link to="/HardSkills">
          <button accessKey='H' className='ButtonNavBar3' type='button'>Hard Skills</button>
        </Link>
        <Link to="/SoftSkills">
          <button accessKey='S' className='ButtonNavBar3' type='button'>Soft Skills</button>
        </Link>
        <Link to="/experiencias">
          <button accessKey='L' className="ButtonNavBar3" type="button">{Traduzir ? 'Experiências' : 'Experiences'}
          </button>
        </Link>
        <Link to="/Academico">
         <button accessKey='A' className='ButtonNavBar3' type='button'>{Traduzir ? 'Acadêmico' : 'Academic'}
        </button>
        </Link>
        <Link to="/CursosBootcamps">
          <button accessKey='B' className='ButtonNavBar3' type='button'>{Traduzir ? 'Cursos Bootcamps' : 'Bootcamp Courses'}
          </button>
        </Link>
        <Link to="/Objetivo">
          <button accessKey='O' className='ButtonNavBar3' type='button'>{Traduzir ? 'Objetivo' : 'Objective'}
          </button>
        </Link>
      </nav>
      
    <main>
         {/* Sessão que contem as habilidades comportamentais */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>Soft Skills</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Alta criatividade, podendo criar resultados visuais criativos e modernos, ajudando também para a resolução de problemas complexos, boa comunicação, sendo flexível e organizada. Boa escrita respeitando as regras gramaticais, pontualidade, esforço máximo, organização e respeito no âmbito de trabalho, aprendizado Contínuo, alta Resiliência e adaptação, com facilidade para aprender habilidades técnicas novas. ':'High creativity, capable of creating creative and modern visual results, also helping to solve complex problems; good communication, being flexible and organized; good writing respecting grammatical rules; punctuality; maximum effort; organization and respect in the workplace; continuous learning; high resilience and adaptability, with ease in learning new technical skills.'}</p>
        </ul>
    </main>
    </body>
        </>
    )
}