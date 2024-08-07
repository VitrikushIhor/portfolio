import {Poppins} from 'next/font/google';

export const Poppins_Font = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	preload: true,
	style: 'normal',
	variable: '--font-poppins',
});

