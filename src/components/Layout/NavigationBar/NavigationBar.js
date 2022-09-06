import * as React from "react"
import * as GlobalStyles from '../Layout.module.scss'
import * as CompStyles from './NavigationBar.module.scss'

const NavigationBar = () => {
    return (
        <header>
            <nav className={`${GlobalStyles.container} ${CompStyles.headerNav}`}>
                <div className={CompStyles.brand}>vb</div>
                <ul>
                    <li>
                        <a href="#introduction">Início</a>
                    </li>
                    <li>
                        <a href="#about">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar