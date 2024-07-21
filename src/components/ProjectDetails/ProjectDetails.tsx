// import {CloseRounded} from '@mui/icons-material';
// import {Modal} from '@mui/material';
import styles from './styles.module.scss'
import Image from 'next/image';
import {IOpenModal} from '@/components/Wrapper/Wrapper';
import {FC} from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';
import {IoClose} from 'react-icons/io5';
import {Autoplay, FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

interface InterfaceProjectDetails {
	openModal: IOpenModal
	setOpenModal: (openModal: IOpenModal) => void
}

const ProjectDetails: FC<InterfaceProjectDetails> = ({openModal, setOpenModal}) => {
	const project = openModal?.project;
	return (
		 <Dialog open={true} onClose={() => setOpenModal({state: false, project: null})} className={styles.Container}>
			 <DialogPanel className={styles.Wrapper}>
				 <IoClose
						className={styles.close}
						onClick={() => setOpenModal({state: false, project: null})}
				 />
				 <Swiper
						pagination={{
							clickable: true,
							bulletActiveClass: `${styles.swiperPaginationBulletActive}`,
							bulletClass: `${styles.swiperPaginationBullet}`,
							horizontalClass: `${styles.horizontalClass}`,
						}}
						modules={[Pagination]}
						autoplay={{
							delay: 1500,
							disableOnInteraction: false,
						}}
						className={styles.swiper}
				 >
					 {project?.images.map((img, key) => (
							<SwiperSlide key={key} className={styles.slide}>
								<img className={styles.Image} src={img} alt=""/>
							</SwiperSlide>
					 ))}
				 </Swiper>

				 <div className={styles.Title}>{project?.title}</div>
				 <div className={styles.Date}>{project?.dateStart} - {project?.dateEnd}</div>
				 <div className={styles.Tags}>
					 {project?.tags.map((tag: any, index) => (
							<div key={index} className={styles.Tag}>{tag}</div>
					 ))}
				 </div>
				 <div className={styles.Desc}>{project?.description}</div>
				 <div className={styles.ButtonGroup}>
					 <a className={styles.Button} href={project?.github} target="new">View Code</a>
					 {project?.webapp && <a className={styles.Button} href={project?.webapp} target="new">View Live App</a>}
				 </div>
			 </DialogPanel>
		 </Dialog>
	)
}

export default ProjectDetails

