/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
			protocol: 'https', hostname: 'camo.githubusercontent.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'www.w3.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'upload.wikimedia.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'rxjs.dev', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'du-blog.ru', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'nodejs.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'www.vectorlogo.zone', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'www.postgresql.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'raw.githubusercontent.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'e7.pngegg.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'github.githubassets.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'i.pinimg.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'upload.wikimedia.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 's3-alpha.figma.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'static-00.iconduck.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'upload.wikimedia.org', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'seeklogo.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'uploads.turbologo.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'assets.vercel.com', port: '', pathname: '/**',
		}, {
			protocol: 'https', hostname: 'github.com', port: '', pathname: '/**',
		}],
	},
};

export default nextConfig;
