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
		},
			{
				protocol: 'https', hostname: 'cloudinary.com', port: '', pathname: '/**',
			},
			{
				protocol: 'https', hostname: 'res.cloudinary.com', port: '', pathname: '/**',
			}
		],
	},
	async headers() {
		return [
			{
				// співставлення всіх API-маршрутів
				source: "/api/:path*",
				headers: [
					{key: "Access-Control-Allow-Credentials", value: "true"},
					{key: "Access-Control-Allow-Origin", value: "*"}, // замініть це на список довірених доменів, з яких можна зробити запити
					{key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT"},
					{
						key: "Access-Control-Allow-Headers",
						value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
					},
				]
			}
		]
	}
};

export default nextConfig;
