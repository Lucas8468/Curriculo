{/* Importando os Hooks necessários para a aplicação */}
import { useEffect, useState } from 'react'

{/* Importando o css para a aplicação */}
import './index.css'

import { Link } from 'react-router-dom';

{/* Componente que contém os arquivos principais da Aplicação */}
export default function Index(){

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
          document.title = Traduzir? 'Complementar':'All'
          
      })
    return(
      
        <>
        {/* Utilizando a Tag Body para alterar o Modo Noturno/Diurno */}
    <body className={Modos? 'Back1':'Back2'}>

      {/* Div que contém o Menu de configurações */}  
      <div>
        <button style={{border: Modos? 'solid white 1px': 'solid black 1px'}} className="buttonMenu" onClick={()=>setMenu(!Menu)}>
          <img  className="Menu" src="../Recursos-externos/menu-hamburguer.png" alt="image" />
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
        {/* Sessão que contém as habilidades técnicas */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>Hard Skills</h1>
          <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Avançado':'Advanced'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>Javascript, Node.js, Vite.js, Express.js, HTML, CSS</p>
            <hr />
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Intermediário':'Intermediary'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>Typescript, React.js, React Router DOM, Mysql, Git, Github, Excel, Powerpoint e Word</p>
            <hr />
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Básico':'Basic'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>Power BI, PHP, Python, Next.js</p>
          </ul>
      </main>
      </body>
        </>
    )
}