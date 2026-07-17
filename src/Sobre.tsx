import { useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Nome", "Superior", "Dica"],
  [
    {
      v: "1",
      f: 'Lucas Brandão<div style="color: Blue; font-weight: bold;">Tech ADM</div>',
    },
    "",
    "ADS e Gestão empresarial",
  ],
  [{ v: "2", f: "BackEnd" }, "1", ""],
  ['Express.JS', '2', ''],
  ['Nodemon', 'Express.JS', ''],
  ['Cors', 'Express.JS', ''],
  ['MySQL', '2', ''],
  
  [{ v: "3", f: "FrontEnd" }, "1", "Desenvolvimento Web e Mobile"],
  ["React.JS", "3", "Biblioteca para interfaces web"],
  ['Google Charts', 'React.JS', ''],
  ['React Router DOM', 'React.JS', ''],
  ['SweetAlert2', 'React.JS', ''],
  ['HTMX', 'React.JS', ''],
  ["React Native", "3", "Biblioteca para interfaces web"],
  ['Victory Native', 'React Native', ''],
  ['Notifee', 'React Native', ''],
  
  [{ v: "4", f: "Geral" }, "1", "Desenvolvimento Mobile"],
  ['Gemini', '4', ''],
  ['Chat GPT', '4', ''],
  ['Photoshop', '4', ''],
  ['After Effect', '4', ''],
  ['Dreamina', '4', ''],
  ['Excel', '4', ''],
  ['Power BI', '4', ''],
  ['VScode', '4', ''],
  ['Node.JS exec', 'VScode', ''],
  ['Error Lens', 'VScode', ''],
  ['Live Server', 'VScode', ''],
  ['Codesnap', 'VScode', ''],
  ['Palenight Theme', 'VScode', '']
];

// 2. Configurações visuais
export const options = {
  allowHtml: true, 
  size: "large", 
};

// Componente Sobre
export default function Sobre() {
  
  useEffect(() => {
    document.body.style.backgroundColor = '#01647d';
    document.title = 'Sobre ';
    
    // Injeta dinamicamente o CSS para customizar a barra de rolagem global do navegador
    const scrollbarStyle = document.createElement("style");
    scrollbarStyle.id = "custom-scrollbar";
    scrollbarStyle.innerHTML = `
      /* Configuração para Chrome, Edge, Safari, Opera e Brave */
      ::-webkit-scrollbar {
        width: 12px;               /* Largura da barra vertical */
        height: 12px;              /* Altura da barra horizontal */
      }
      ::-webkit-scrollbar-track {
        background: #014d61;       /* Cor de fundo da pista da barra */
      }
      ::-webkit-scrollbar-thumb {
        background-color: #03aec5; /* Cor do cursor da barra */
        border-radius: 6px;        /* Deixa os cantos arredondados */
        border: 3px solid #014d61; /* Cria espaçamento falso usando a cor da pista */
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #00e5ff; /* Cor mais clara quando passa o mouse */
      }

      /* Configuração para Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #03aec5 #014d61;
      }
    `;
    document.head.appendChild(scrollbarStyle);
    
    // Limpeza ao sair da página (desmontar o componente)
    return () => {
      document.body.style.backgroundColor = '';
      const styleElement = document.getElementById("custom-scrollbar");
      if (styleElement) styleElement.remove();
    };
  }, []);

  return (
    <>
      <h1 style={{textAlign: 'center', color: '#fff'}}>Lucas Brandão da Silva</h1>
      
      <Chart
        chartType="OrgChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </>
  );
}


