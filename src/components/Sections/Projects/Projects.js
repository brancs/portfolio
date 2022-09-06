import * as React from "react"
import Card from "../../Card/Card"
import * as GlobalStyles from '../../Layout/Layout.module.scss'
import * as CompStyles from './Projects.module.scss'

const projects = [
    {
        title: 'Em breve', 
        device: '',
        technologies: '',
        projectToOpen: '',
        imgSrc: './static/images/projects/default.png'
    },
    {
        title: 'Em breve', 
        device: '',
        technologies: '',
        projectToOpen: '',
        imgSrc: './static/images/projects/default.png'
    },
    {
        title: 'Em breve', 
        device: '',
        technologies: '',
        projectToOpen: '',
        imgSrc: './static/images/projects/default.png'
    },
]

const ProjectsCards = () => {
    return (
        <div className={CompStyles.projectsCards}>
            {
                projects.map(({title, device, technologies, projectToOpen, imgSrc}) => {
                    return <Card key={title} title={title} device={device} technologies={technologies} page={projectToOpen} imgSrc={imgSrc} />
                })
            }
        </div>
    )
}

const ProjectsEmpty = () => {
    return (
        <div className={CompStyles.projectsEmpty}>
            <div className={CompStyles.indLine}>
                <img src="./static/images/projects/detail.svg" alt="" className={CompStyles.detail} />
            </div>
        </div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className={`${GlobalStyles.sectionSize} ${CompStyles.projects}`}>
        <div className={`${GlobalStyles.container} ${CompStyles.contentWrapper}`}>
            <h2>Meus projetos</h2>
            {
                projects.length > 0 ? <ProjectsCards /> : <ProjectsEmpty />
            }
        </div>
    </section>
  )
}

export default Projects