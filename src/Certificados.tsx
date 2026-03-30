import { useEffect, useState } from "react";

export default function Certificados() {
  const [Modos, setModos] = useState(() => {
    const save3 = localStorage.getItem('AlterarModo');
    return save3 ? JSON.parse(save3) : true;
  });

  const [Traduzir, setTraduzir] = useState(() => {
    const Save = localStorage.getItem('Key 4');
    return Save ? JSON.parse(Save) : true;
  });

  const [Menu, setMenu] = useState(() => {
    const save2 = localStorage.getItem('fun');
    return save2 ? JSON.parse(save2) : true;
  });

  useEffect(() => {
    localStorage.setItem('fun', JSON.stringify(Menu));
    localStorage.setItem('AlterarModo', JSON.stringify(Modos));
    document.title = Traduzir ? 'Certificados' : 'Certificates';

    if (Modos) {
        document.body.style.backgroundColor = "#0f313b";
    } else {
        document.body.style.backgroundColor = "#01647d";
    }

}, [Menu, Modos, Traduzir]);

return(
  <>
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

  <h1 className={Modos? 'h1FotosNoturno': 'h1FotosDiurno'}>Alura AWS</h1>
  <img className={Modos? 'ImgFotosDiurno':'ImgFotosNoturno'} src="/cert-1.png.png" alt="" />
  <img className={Modos? 'ImgFotosNoturno3':'ImgFotosDiurno3'} src="/certi-1.png.png" alt="" />
  <hr />
  <h1 className={Modos? 'h2FotosNoturno': 'h2FotosDiurno'}>CSS (Cascading Style Sheets)</h1>
  <br /><br /><br /><br /><br />
  <img className={Modos?'ImgFotosNoturno2':'ImgFotosDiurno2'} src="/css-f.png" alt="" />
  <img  className={Modos? 'ImgFotosNoturno1':'ImgFotosDiurno1'} src="/certi-2.png.png" alt="" />
  <hr />
  <h1 className={Modos? 'h1FotosNoturno': 'h1FotosDiurno'}>Power BI</h1>
  <br /><br /><br /><br /><br />
  <img className={Modos? 'ImgFotosNoturno3D':'ImgFotosDiurno3D'} src="/power-bi1.png" alt="" />
  <img className={Modos? 'ImgFotosNoturno3E':'ImgFotosDiurno3E'} src="/power-bi2.png" alt="" />
  <hr />
  <h1 className={Modos? 'h3FotosNoturno': 'h3FotosDiurno'}>HTML</h1>
  <br /><br /><br /><br /><br />
  <img className={Modos? 'ImgFotosNoturno4':'ImgFotosDiurno4D'} src="/cert-4.png.png" alt="" />
  <img className={Modos? 'ImgFotosNoturno4e':'ImgFotosDiurno4e'} src="/certi-4.png.png" alt="" />
  <hr />
  <h1 className={Modos? 'h2FotosNoturno': 'h2FotosDiurno'}>Auxiliar Administrativo</h1>
  <br /><br /><br /><br /><br />
  <img className={Modos? 'ImgFotosNoturno5':'ImgFotosDiurno5e'} src="/cert-5.png.png" alt="" />
  <img className={Modos? 'ImgFotosNoturno5':'ImgFotosDiurno5e'} src="/certi-5.png.png" alt="" />
  </>
)}