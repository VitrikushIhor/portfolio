'use client'
import React from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from '@/store/store';
import Navbar from '@/components/dashboard/navbar/Navbar';
import styles from './styles.module.scss'
import {Poppins_Font} from '@/styles/font/font';


export default function RootLayout({
	                                   children,
                                   }: Readonly<{ children: React.ReactNode }>) {
	return (
		 <html lang="en">
		 <Provider store={createReduxStore()}>
			 <body className={Poppins_Font.className}>
			 <Navbar/>
			 <div className={styles.body}>
				 {children}
			 </div>
			 </body>
		 </Provider>
		 </html>
	);
}
