const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});
// const withImages = require('next-images')
// module.exports = withImages({
//   inlineImageLimit: 16384,
//   webpack(config, options) {
//     return config
//   }
// })
// module.exports = withCSS(withSass({
//     webpack (config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000
//           }
//         }
//       })
  
//       return config
//     }
//   }))
// const withCSS = require("@zeit/next-css");
// require('dotenv').config()
// const path = require('path')
// const Dotenv = require('dotenv-webpack')

// const withImages = require('next-images')

// module.exports = withCSS(withImages({
//     inlineImageLimit: 16384,
//     webpack(config, options) {
//         config.plugins = config.plugins || [];
//         config.plugins = [
//             ...config.plugins,

//             // Read the .env file
//             new Dotenv({
//                 path: path.join(__dirname, '.env'),
//                 systemvars: true
//             })
//         ];
//         return config
//     }
// }));