import styles from './styles.module.scss';
import {ButtonHTMLAttributes, ReactNode} from 'react';

export interface InterfaceButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children: ReactNode;
}


export default function Button(props: InterfaceButton) {
	const {className = '', children, ...otherProps} = props
	return (
		 <button className={`${styles.button} ${className}`} {...otherProps}>
			 {children}
		 </button>
	)
}
