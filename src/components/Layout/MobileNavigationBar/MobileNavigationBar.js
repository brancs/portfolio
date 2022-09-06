import * as React from "react"
import * as CompStyles from './MobileNavigationBar.module.scss'
import { Icon } from "@iconify/react";

const MobileNavigationBar = () => {
  return (
    <nav className={CompStyles.mobileNav}>
        <ul>
            <li>
                <a href="#introduction">
                    <Icon icon="carbon:home" className={CompStyles.icon} />
                    Início
                </a>
            </li>
            <li>
                <a href="#about">
                    <Icon icon="carbon:credentials" className={CompStyles.icon} />
                    Sobre mim
                </a>
            </li>
            <li>
                <a href="#projects">
                    <Icon icon="carbon:keyboard" className={CompStyles.icon} />
                    Projetos
                </a>
            </li>
            <li>
                <a href="#contact">
                    <Icon icon="carbon:chat" className={CompStyles.icon} />
                    Contato
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default MobileNavigationBar