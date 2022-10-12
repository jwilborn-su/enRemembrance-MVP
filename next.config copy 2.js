module.exports = {
	webpack: (config, { isServer }) => {
		
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
				path: false,
				"fs-extra": false,
				net: "empty",
				tls: "empty",
				node: {
					fs: 'empty',
					net: 'empty',
					tls: 'empty',
				 },
			}
		}

		return config
	},
}
