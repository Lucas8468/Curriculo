import { useEffect, useState } from "react"
export default function Certificados(){
      const [Modos, setModos]=useState(()=>{
    const save3 = localStorage.getItem('AlterarModo')
    return save3 ? JSON.parse(save3) : true
  })
  const [Traduzir, setTraduzir]=useState(()=>{
    const Save = localStorage.getItem('Key 4')
    return Save ? JSON.parse(Save) : true
      })
       const [Menu, setMenu]=useState(()=>{
    const save2 = localStorage.getItem('fun')
    return save2 ? JSON.parse(save2) : true
  }) 
           useEffect(()=>{
                    
                    localStorage.setItem('fun', JSON.stringify(Menu))
                    localStorage.setItem('AlterarModo', JSON.stringify(Modos))
                    document.title = Traduzir? 'Certificados':'Certificates'
                })
    return(
        
        <>
        <body className={Modos? 'BackFotosNoturno':'BackFotosDiurno'}></body>
        <div>
        <button style={{border: Modos? 'solid white 1px': 'solid black 1px'}} className="buttonMenu" onClick={()=>setMenu(!Menu)}>
           <img className="Menu" src="/menu-hamburguer.png" alt="Menu Hamburguer"/>
        </button>
        <div style={{backgroundColor: Modos? '#0f313b':'#01647d'}} className={Menu? 'NavbarVertical1':'NavbarVertical2'}>
            {Menu?<h1 className={Modos? 'h1ConfigNoturno':'h1ConfigDiurno'}>{Traduzir? 'Configurações': 'Settings'}</h1>: null}
            {Menu?<button style={{marginLeft: Traduzir? '':'-90px'}} className='ButtonTradutor' onClick={()=>setTraduzir(!Traduzir)} type='button'>{Traduzir?'Inglês':'Português'}</button>: null}
            {Menu?<button className="ButtonModos" onClick={()=>setModos(!Modos)}>{Traduzir? 'Alterar tema': 'change theme'}</button>:null}
        </div>    
        <h1 className={Modos?'h1FotosDiurno':'h1FotosNoturno'}>Alura AWS</h1>
      </div>
        <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} onClick={()=>setTraduzir(!Traduzir)} src="\public\Captura de tela 2026-03-27 052953.png" alt=""/>
        {<img className={Modos? 'ImgFotosDiurno3':'ImgFotosNoturno3'} src="\public\Captura de tela 2026-03-29 064259.png" alt="" />}
        <hr />
        <h1 className={Modos?'h1FotosDiurno':'h1FotosNoturno'}>Power BI</h1>
        <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} onClick={()=>setTraduzir(!Traduzir)} src="\public\Captura de tela 2026-03-29 073240.png" alt=""/>
        {<img className={Modos? 'ImgFotosDiurno2':'ImgFotosNoturno2'} src="\public\Captura de tela 2026-03-29 073449.png" alt="" />}
        <hr />
        <h1 className={Modos?'h2FotosDiurno':'h2FotosNoturno'}>CSS (Cascading Style Sheets)</h1>
        <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} onClick={()=>setTraduzir(!Traduzir)} src="\public\Captura de tela 2026-03-29 075304.png" alt=""/>
        {<img className={Modos? 'ImgFotosDiurno2':'ImgFotosNoturno2'} src="\public\Captura de tela 2026-03-29 075312.png" alt="" />}
        <hr />
        <h1 className={Modos?'h3FotosDiurno':'h3FotosNoturno'}>HTML</h1>
        <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} onClick={()=>setTraduzir(!Traduzir)} src="\public\Captura de tela 2026-03-29 080103.png" alt=""/>
        {<img className={Modos? 'ImgFotosDiurno2':'ImgFotosNoturno2'} src="\public\Captura de tela 2026-03-29 080112.png" alt="" />}
        <hr />
        <h1 className={Modos?'h2FotosDiurno':'h2FotosNoturno'}>Auxiliar Administrativo</h1>
        <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} onClick={()=>setTraduzir(!Traduzir)} src="\public\Captura de tela 2026-03-29 080642.png" alt=""/>
        {<img className={Modos? 'ImgFotosDiurno2':'ImgFotosNoturno2'} src="\public\Captura de tela 2026-03-29 080649.png" alt="" />}
        </>
    )
}