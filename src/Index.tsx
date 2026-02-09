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

      {/* Conteúdo que contém todas as informações do currículo */}
      <main>

        {/* Sessão onde contém as informações de contato */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Informações essenciais':'essential Information'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text1Noturno':'text1Diurno'}>{Traduzir?'Número':'Number'} (<a href="https://wa.me/5511994710951" target='_blank'>Whatsapp</a>): 11 99471-0951</li>
          <li className={Modos? 'text1Noturno':'text1Diurno'}>CEP: 06385-110</li>
          <li className={Modos? 'text1Noturno':'text1Diurno'}>Email: lucasbrandaods080@gmail.com</li>
          <li className={Modos? 'text1Noturno':'text1Diurno'}><a href="https://github.com/Lucas8468" target='_blank'>Github: Lucas8468</a> </li>
          <li className={Modos? 'text1Noturno':'text1Diurno'}><a href="https://www.linkedin.com/in/lucas-brand%C3%A3o-da-silva-baa82b367?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtV56LlXBRjSlbl9BD2u4sA%3D%3D" target='_blank'>Linkedin: Lucas Brandão da Silva</a></li>
        </ul>
        <hr />

        {/* Sessão que contém as habilidades técnicas */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>Hard Skills</h1>
          <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Avançado':'Advanced'}</li>
             <p className={Modos? 'text2Noturno':'text2Diurno'}>Javascript, React.js, Windows, Vite.js, Express.js, HTML, CSS</p>
            <hr />
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Intermediário':'Intermediary'}</li>
              <p className={Modos? 'text2Noturno':'text2Diurno'}>Typescript, Node.js, React Router DOM, Mysql, Git, Github, Excel, Powerpoint e Word</p>
            <hr />
            <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Básico':'Basic'}</li>
             <p className={Modos? 'text2Noturno':'text2Diurno'}>Power BI, PHP, Linux, Python, Next.js</p>
          </ul>      
        <hr />

        {/* Sessão que contem as habilidades comportamentais */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>Soft Skills</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Alta criatividade, podendo criar resultados visuais criativos e modernos, ajudando também para a resolução de problemas complexos, boa comunicação, sendo flexível e organizada. Boa escrita respeitando as regras gramaticais, pontualidade, esforço máximo, organização e respeito no âmbito de trabalho, aprendizado Contínuo, alta Resiliência e adaptação, com facilidade para aprender habilidades técnicas novas. ':'High creativity, capable of creating creative and modern visual results, also helping to solve complex problems; good communication, being flexible and organized; good writing respecting grammatical rules; punctuality; maximum effort; organization and respect in the workplace; continuous learning; high resilience and adaptability, with ease in learning new technical skills.'}</p>
        </ul>
        <hr />

        {/* sessão que contém as Experiências do candidato */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Experiências':'Experiences'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text4Noturno':'text4Diurno'}>Dunamis</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Cargo: Controlador de Acesso':'Job title: Acess Controller'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Postos: Hospitais particulares - Carapícuiba e osasco':'Jobs held: Private hospitals - Carapicuíba and Osasco'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Duração: 4 Meses': 'Duration: 4 Months'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Escala: 12X36 ':'Scale: 12x36'}</p>
          <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>Verzani & Sandrini</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Cargo: Porteiro':'Job Title: Doorman'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir? 'Postos trabalhados: Condomínio empresarial, telemarketing e shopping': 'Job positions: Business park, telemarketing, and shopping mall.'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir? 'Duração: 3 Meses': 'Duration: 3 Months'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Escala: 12X36': 'Scale: 12X36'}</p>
          <hr />
          <li className={Modos? 'text4Noturno':'text4Diurno'}>Espartaco</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Posto de trabalho: Condomínio empresarial - Barueri ': 'Job location: Business park - Barueri'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir? 'Cargo: Controlador de acesso': 'Job Title: Acess Controller'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Duração: 2 Meses': 'Duration: 2 Months'}</p>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Escala: 12X36': 'Scale: 12X36'}</p>
        </ul>
        <hr />

        {/* Sessão que mostra a carreira acadêmica do candidato */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Acadêmico':'Academic'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Ensino Superior':'higher education'}</li>
        </ul>
        <hr />

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
        <hr />

        {/* Sessão que mostra os objetivos do candidato na corporação */}
        <h1 className={Modos? 'h1Noturno':'h1Diurno'}>{Traduzir?'Objetivo':'Objective'}</h1>
        <ul className={Modos? 'ul1Noturno':'ul1Diurno'}>
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Apresentação':'Presentation'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?`Gostaria de participar da equipe de colaboradores da empresa para ter um crescimento profissional junto com os colegas de trabalho, podendo dar o meu máximo para a instituição, e assim, evoluirmos profissionalmente juntos. 
            Tenho o foco de me especializar no desenvolvimento Web, sendo full-stack, mas também tendo noções de criação de aplicações`:`I would like to join the company's team of collaborators to experience professional growth alongside my colleagues, giving my best to the institution, and thus, evolving professionally together.

            My focus is to specialize in web development, being a full-stack developer, but also having knowledge of application creation.`}</p>
          <li className={Modos? 'text4Noturno':'text4Diurno'}>{Traduzir?'Cargo Pretendido':'Desired Position'}</li>
            <p className={Modos? 'text2Noturno':'text2Diurno'}>{Traduzir?'Desenvolvedor Web':'Web developer'}</p>
        </ul>
      </main>
    </body>  
    </>
  )
}
