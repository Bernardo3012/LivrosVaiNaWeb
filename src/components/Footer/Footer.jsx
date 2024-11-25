import Instagram from "../../assets/instagramIcon.png"
import Facebook from "../../assets/facebookIcon.png"
import Linkedin from "../../assets/linkedinIcon.png"
import Twitter from "../../assets/twitterIcon.png"
import Youtube from "../../assets/youtubeIcon.png"
import s from "./footer.module.scss"



export default function Footer(){
    return(
        <footer>
            <section className={s.redes}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={Facebook} alt="imagem logo do Facebook" /></a>
                    <a href=""><img src={Twitter} alt="imagem logo do Twitter" /></a>
                    <a href=""><img src={Youtube} alt="imagem logo do Youtube" /></a>
                    <a href=""><img src={Linkedin} alt="imagem logo do Linkedin" /></a>
                    <a href=""><img src={Instagram} alt="imagem logo do Instagram" /></a>
                </nav>
            </section>

            <section className={s.direitos}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}