import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss'

const Contact = () => {
	const [open, setOpen] = useState(false);
	const form = useRef<HTMLFormElement | null>(null);

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if (form.current) {
			emailjs.sendForm('service_skc2vxr', 'template_ulwbxdr', form.current, '8AdbchU3VfTJzr5Fm')
				 .then((result) => {
					 setOpen(true);
					 form?.current?.reset();

					 setTimeout(() => {
						 setOpen(false)
					 }, 1000)
				 }, (error) => {
					 console.log(error.text);
				 });
		}
	};

	return (<div className={styles.container}>
		<div className={styles.wrapper}>
			<div className={styles.title}>Contact</div>
			<div className={styles.desc}>
				Feel free to reach out to me for any questions or opportunities!
			</div>
			<form className={styles.contactFrom} ref={form} onSubmit={handleSubmit}>
				<div className={styles.contactTitle}>Email Me 🚀</div>
				{open &&
					 <div className={styles.message}>Email sent successfully</div>}
				<input className={styles.contactInput} placeholder="Your Email" name="from_email"/>
				<input className={styles.contactInput} placeholder="Your Name" name="from_name"/>
				<input className={styles.contactInput} placeholder="Subject" name="subject"/>
				<textarea className={styles.contactInputMessage} placeholder="Message" rows={4} name="message"/>
				<input className={styles.contactButton} type="submit" value="Send"/>
			</form>

		</div>
	</div>);
};

export default Contact;
