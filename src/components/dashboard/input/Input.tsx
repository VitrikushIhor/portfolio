import styles from './styles.module.scss';
import {InputHTMLAttributes} from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

export interface InterfaceInput extends InputHTMLAttributes<HTMLInputElement> {
	className?: string,
	placeholder: string,
	text: string,
	register?: UseFormRegisterReturn<string>
	defValue?: string
}


export default function Input(props: InterfaceInput) {
	const {defValue = '', register, className = '', placeholder, text, ...otherProps} = props
	return (
		 <div className={`${styles.inputWrapper} ${className}}}}`}>
			 <span className={styles.text}>{text}</span>
			 <input defaultValue={defValue} {...register} className={styles.input} placeholder={placeholder}
			        type="text" {...otherProps}/>
		 </div>
	)
}
