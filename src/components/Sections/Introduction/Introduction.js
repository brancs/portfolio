import * as React from "react"
import AnchorButton from "../../Buttons/AnchorButton"
import * as GlobalStyles from '../../Layout/Layout.module.scss'
import * as CompStyles from './Introduction.module.scss'

const Introduction = () => {
    return (
        <section id="introduction" className={`${GlobalStyles.container} ${CompStyles.introduction}`}>
            <div className={`${GlobalStyles.sectionSize} ${CompStyles.content}`}>
                <div>
                    <p className={CompStyles.greeting}>Olá, me chamo</p>
                    <h1 className={CompStyles.name}>Vitor Brancalião</h1>
                    <p className={CompStyles.occupation}>Desenvolvedor front-end</p>
                    <div>
                        <AnchorButton label="LinkedIn" link="https://www.linkedin.com/in/vitor-brancali%C3%A3o-a98322151" target="_blank" iconName="carbon:logo-linkedin" />
                        <AnchorButton label="GitHub" link="https://github.com/brancs?tab=repositories" target="_blank" iconName="carbon:logo-github" />
                    </div>
                </div>
                <div className={CompStyles.illustration}>
                    <video muted autoPlay loop className={CompStyles.video}>
                        <source src="./static/images/projects/tp-cat.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Introduction