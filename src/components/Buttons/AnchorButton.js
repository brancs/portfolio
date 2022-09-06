import * as React from "react"
import * as CompStyles from './Button.module.scss'
import { Icon } from '@iconify/react'

const AnchorButton = ({label, link, iconName, ...props}) => {
    return (
        <a href={link} type="button" className={`${CompStyles.btn} ${CompStyles.btnPrimary} ${CompStyles.outlined}`} {...props}>
            <Icon icon={iconName} className={CompStyles.icon} />
            {label}
        </a>
    )
}

export default AnchorButton