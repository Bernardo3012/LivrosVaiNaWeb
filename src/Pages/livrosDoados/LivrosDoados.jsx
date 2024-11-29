import livro1 from "../../assets/oProtagonista.png"
import s from "./livrosDoados.module.scss"

export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.cointanerCards}>
                <section >
                    <img src={livro1} alt="Livro de capa vermelha de nome O Protagonista." />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                    
                </section>
            </section>
        </section>
    )
}