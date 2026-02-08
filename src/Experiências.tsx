{/* Importando os Hooks necessários para a aplicação */}
import { useEffect, useState } from 'react'

{/* Importando o css para a aplicação */}
import './index.css'

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
        <a href="http://localhost:5173/Index"><button accessKey='C' className='ButtonNavBar1' type="button">{Traduzir? 'Complementar':'All'}</button></a>
        <a href="http://localhost:5173/if"><button  accessKey='I' className='ButtonNavBar2' type='button'>{Traduzir?'Informações essenciais':'essential information'}</button></a>
        <a href="http://localhost:5173/HardSkills"><button accessKey='H' className='ButtonNavBar3' type='button'>Hard Skills</button></a>
        <a href="http://localhost:5173/SoftSkills"><button accessKey='S' className='ButtonNavBar3' type='button'>Soft Skills</button></a>
        <a href="http://localhost:5173/experiencias"><button accessKey='L' className="ButtonNavBar3" type="button">{Traduzir?'Experiências':'Experiences'}</button></a>
        <a href="http://localhost:5173/Academico"><button accessKey='A' className='ButtonNavBar3' type='button'>{Traduzir?'Acadêmico':'Academic'}</button></a>
        <a href="http://localhost:5173/CursosBootcamps"><button accessKey='B' className='ButtonNavBar3' type='button'>{Traduzir?'Cursos Bootcamps':'Bootcamp Courses'}</button></a>
        <a href="http://localhost:5173/Objetivo"><button accessKey='O' className='ButtonNavBar3' type='button'>{Traduzir?'Objetivo':'Objective'}</button></a> 
      </nav>

        <main>
         {/* Sessão que fala sobre os cursos técnicos que o candidato possue */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Cursos Bootcamps':'Bootcamp courses'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Informática Básica':'Basic Computer Skills'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Micromaker':'Institution: Micromaker'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Local: Carapicuíba': 'Location: Carapicuíba'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Controlador de acesso/portaria - carga horaria: 08 horas - 11/2023':'Access control/security guard - working hours: 8 hours - 11/2023'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Corvig':'Institution: Corvig'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Local: Osasco': 'Location: Osasco'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Operador de monitoramento CFTV/alarmes - carga horária: 04 horas - 11/2023':'CCTV/Alarm Monitoring Operator - Workload: 4 hours - 11/2023'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Corvig':'Institution: Corvig'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Local: Osasco': 'Location: Osasco'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Auxiliar administrativo':'Administrative Assistant'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Prime Cursos do Brasil':'Institution: Prime Courses of Brazil'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Modalidade: 100% EAD':'Modality: 100% Online'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>HTML</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Prime Cursos do Brasil':'Institution: Prime Courses of Brazil'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Modalidade: 100% EAD':'Modality: 100% Online'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>CSS</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Prime Cursos do Brasil':'Institution: Prime Courses of Brazil'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Modalidade: 100% EAD':'Modality: 100% Online'}</p>
        <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>Power BI</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Instituição: Prime Cursos do Brasil':'Institution: Prime Courses of Brazil'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Situação: Completo': 'Status: Complete'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Modalidade: 100% EAD':'Modality: 100% Online'}</p>
        </ul>
        </main>
        </body>
        </>
    )
}