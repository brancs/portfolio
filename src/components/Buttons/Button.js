import React from 'react'
import * as CompStyles from './Button.module.scss'
import { Icon } from '@iconify/react'

const Button = ({label, iconName, ...props}) => {
    return (
        <button className={`${CompStyles.btn} ${CompStyles.btnPrimary} ${CompStyles.outlined}`} {...props}>
            <Icon icon={iconName} className={CompStyles.icon} />
            {label}
        </button>
    )
}

export default Button