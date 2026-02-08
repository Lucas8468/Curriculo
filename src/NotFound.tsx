import Gif from '../Recursos-externos/u_mey4kjj5ww-angry-2498.gif'
import './NotFound.css'

export default function NotFound(){
    return(
        <>
        <figure >
            <img className='Gif' src={Gif} alt="Página não encontrada" />
        </figure>
        <main>
            <div className='Div1'>
                <h1 className='h1Number1'>Página não encontrada!</h1>
                <a href="http://localhost:5173/Index"><button className='Button'>Ir para página inicial</button></a>
            </div>
            <div className='Div2'>
                <h1 className='h1Number1'>NotFound!</h1>
            </div>
            <div className='Div3'>
                <h1 className='h1Number1'>¡404!</h1>
            </div>
        </main>
        </>
    )

}