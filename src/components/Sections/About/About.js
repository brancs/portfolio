import * as React from "react"
import * as GlobalStyles from '../../Layout/Layout.module.scss'
import * as CompStyles from './About.module.scss'

const About = () => {
    return (
        <section id="about" className={`${GlobalStyles.sectionSize} ${CompStyles.about}`}>
            <div className={`${GlobalStyles.container} ${CompStyles.contentWrapper}`}>
                <div className={CompStyles.description}>
                    <h2>Sobre mim</h2>
                    <p>
                        Olá, me chamo Vitor, sou um desenvolvedor front-end.
                    </p>
                    <p>
                        Meu trabalho é focado na entrega de resultados em forma de experiências que cativam os usuários.
                    </p>
                    <p>
                        Vamos criar experiências incríveis juntos?
                    </p>
                </div>
                <div className={CompStyles.image}>
                    <img src="./static/images/profile/profile-image.png" alt="Vitor Brancalião" className={`${GlobalStyles.imgFluid} ${CompStyles.profileImage}`} />
                </div>
            </div>
        </section>
    )
}

export default About