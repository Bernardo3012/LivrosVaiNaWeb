import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import logoLivro from "../../assets/logoLivro.png"
import lupa from "../../assets/lupa.png"
import s from "./header.module.scss"
import Inicio from '../../Pages/Inicio/Inicio'
import LivrosDoados from '../../Pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../Pages/queroDoar/QueroDoar'

export default function Header(){
    return(
    <BrowserRouter>
        <header>
            <section className={s.logoHeader}>
                <img src={logoLivro} alt="imagem de ilustração de um livro de capa azul aberta" />
                <h1>Livros Vai na Web</h1>
            </section>

            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/'>Inicio</Link></li>
                    <li><Link className={s.link} to='/livros-doados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/quero-doar'>Quero Doar</Link></li>
                </ul>
            </nav>
            
            <section className={s.barraDeBusca}>
                <input type="search" name='' id='' placeholder='O que você procura?'  />
                <button><img src={lupa} alt="Imagem de uma lupa branca" /></button>
            </section>
        </header>
        
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livros-doados' element={<LivrosDoados/>}/>
                <Route path='/quero-doar'element={<QueroDoar/>}/>
            </Routes>

    </BrowserRouter>
    )
}