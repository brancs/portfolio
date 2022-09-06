import * as React from "react"
import Button from "../../Buttons/Button"
import AnchorButton from "../../Buttons/AnchorButton"
import * as GlobalStyles from '../../Layout/Layout.module.scss'
import * as CompStyles from './Contact.module.scss'

const Contact = () => {
    return (
        <section id="contact" className={`${GlobalStyles.sectionSize} ${CompStyles.contact}`}>
            <div className={`${GlobalStyles.container} ${CompStyles.contentWrapper}`}>
                <h2>Entre em contato</h2>
                <p>
                    Vamos marcar um papo!
                </p>
                <div>
                    <AnchorButton label="LinkedIn" link="https://www.linkedin.com/in/vitor-brancali%C3%A3o-a98322151" target="_blank" iconName="carbon:logo-linkedin" />
                    <Button label="vitor.brancaliao@outlook.com" iconName="mdi:email" />
                </div>
            </div>
        </section>
    )
}

export default Contact