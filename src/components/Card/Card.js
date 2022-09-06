import { Icon } from "@iconify/react";
import * as React from "react"
import * as CompStyles from './Card.module.scss'

const Card = ({title, device, technologies, page, imgSrc}) => {
    return (
        <div className={CompStyles.card}>
            <a href={page}>
                <div className={CompStyles.backdrop}>
                    <Icon icon="carbon:view" className={CompStyles.icon} />
                </div>
                <img src={imgSrc} alt={title} className={CompStyles.image} />
                <div className={CompStyles.texts}>
                    <p className={CompStyles.title}>{`${title}`}</p>
                    <p className={CompStyles.description}>{`${device} ${technologies ? '|' : ''} ${technologies}`}</p>
                </div>
            </a>
        </div>
    );
};

export default Card;
