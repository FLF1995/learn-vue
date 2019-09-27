const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
	},
    // webpack-dev-server 相关配置 
	devServer: {
		port: 9000,
		open: true,
		overlay: {
		  warnings: false,
		  errors: true
		},
		proxy: {
		  '/eyousystem': {
			target: 'https://eyou.xwqyy.com',
			changeOrigin: true
		  },
		  '/eyouappstatistics': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/reception': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyoumessage': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyouparam': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/letter': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/task': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyoulog': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyouproperty': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyouevent': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyouadvice': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyoupatrol': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  '/eyouwarning': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  },
		  'eyouassets': {
			target: 'http://61.174.54.120:9000',
			changeOrigin: true
		  }
		}
	}
}
