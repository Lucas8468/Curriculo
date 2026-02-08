import { useEffect, useState } from "react"

export default function Academico(){

  const [Traduzir, setTraduzir]=useState(()=>{
    const Save = localStorage.getItem('Key 4')
    return Save ? JSON.parse(Save) : true
      })

  const [Menu, setMenu]=useState(()=>{
    const save2 = localStorage.getItem('fun')
    return save2 ? JSON.parse(save2) : true
      })   

  const [Modos, setModos]=useState(()=>{
    const save3 = localStorage.getItem('AlterarModo')
    return save3 ? JSON.parse(save3) : true
      })

      useEffect(()=>{
          localStorage.setItem('Key 4', JSON.stringify(Traduzir))
          localStorage.setItem('fun', JSON.stringify(Menu))
          localStorage.setItem('AlterarModo', JSON.stringify(Modos))
          document.title = Traduzir? 'Acadêmico':'Academic'
          
      })
     
    return(
        <>
        {/* Utilizando a Tag Body para alterar o Modo Noturno/Diurno */}
        <body className={Modos? 'Back1':'Back2'}>
          
        </body>
        
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

      {/* Sessão que mostra a carreira acadêmica do candidato */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Acadêmico':'Academic'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Ensino Superior':'higher education'}</li>
        </ul>
      </main>

        </>
    )
}