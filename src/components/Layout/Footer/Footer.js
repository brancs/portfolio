import * as React from "react"
import * as GlobalStyles from '../Layout.module.scss'
import * as CompStyles from './Footer.module.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={CompStyles.customFooter}>
            <div className={GlobalStyles.container}>&copy; Vitor Brancalião - {currentYear}</div>
        </footer>
    )
}

export default Footer