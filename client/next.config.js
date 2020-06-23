// // const withSass = require("@zeit/next-sass");
// // const withLess = require("@zeit/next-less");

// // const isProd = process.env.NODE_ENV === "production";

// // // fix: prevents error when .less files are required by node
// // if (typeof require !== "undefined") {
// //   require.extensions[".less"] = (file) => {};
// // }

// // module.exports = withLess(
// //   withSass({
// //     lessLoaderOptions: {
// //       javascriptEnabled: true,
// //     },
// //   })
// // );

// // const compose = (plugins) => ({
// //   webpack(config, options) {
// //     return plugins.reduce((config, plugin) => {
// //       if (plugin instanceof Array) {
// //         const [_plugin, ...args] = plugin;
// //         plugin = _plugin(...args);
// //       }
// //       if (plugin instanceof Function) {
// //         plugin = plugin();
// //       }
// //       if (plugin && plugin.webpack instanceof Function) {
// //         return plugin.webpack(config, options);
// //       }
// //       return config;
// //     }, config);
// //   },

// // const withPlugins = require("next-compose-plugins");
// // const withCss = require("@zeit/next-css");
// // const withSass = require("@zeit/next-sass");

// // if (typeof require !== "undefined") {
// //   require.extensions[".css"] = (file) => {};
// // }

// // const nextConfig = {
// //   webpack: (config, { isServer }) => {
// //     if (isServer) {
// //       const antStyles = /antd\/.*?\/style\/css.*?/;
// //       const origExternals = [...config.externals];
// //       config.externals = [
// //         // eslint-disable-line
// //         (context, request, callback) => {
// //           // eslint-disable-line
// //           if (request.match(antStyles)) return callback();
// //           if (typeof origExternals[0] === "function") {
// //             origExternals[0](context, request, callback);
// //           } else {
// //             callback();
// //           }
// //         },
// //         ...(typeof origExternals[0] === "function" ? [] : origExternals),
// //       ];

// //       config.module.rules.unshift({
// //         test: antStyles,
// //         use: "null-loader",
// //       });
// //     }
// //     return config;
// //   },
// // };

// // module.exports = withPlugins(
// //   [
// //     [withCss],
// //     [
// //       withSass,
// //       {
// //         cssModules: true,
// //         cssLoaderOptions: {
// //           localIdentName: "[path]___[local]___[hash:base64:5]",
// //         },
// //       },
// //     ],
// //   ],
// //   nextConfig
// // );

// require("dotenv").config();
// const withLess = require("@zeit/next-less");
// const lessToJS = require("less-vars-to-js");
// const fs = require("fs");
// const path = require("path");

// const withSass = require("@zeit/next-sass");
// const withCss = require("@zeit/next-css");
// const withPlugins = require("next-compose-plugins");

// // Where your antd-custom. less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, "./styles/home.less"), "utf8")
// );

// const nextConfig = {
//   env: {
//     spaceID: process.env.spaceID,
//     accessTokenDelivery: process.env.accessTokenDelivery,
//   },
//   distDir: ".next",
// };

// const plugins = [
//   withCss,
//   withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: themeVariables,
//     },
//     webpack: (config, { isServer }) => {
//       if (isServer) {
//         const antStyles = /antd\/.*?\/style.*?/;
//         const origExternals = [...config.externals];
//         config.externals = [
//           (context, request, callback) => {
//             if (request.match(antStyles)) return callback();
//             if (typeof origExternals[0] === "function") {
//               origExternals[0](context, request, callback);
//             } else {
//               callback();
//             }
//           },
//           ...(typeof origExternals[0] === "function" ? [] : origExternals),
//         ];
//         config.module.rules.unshift({
//           test: antStyles,
//           use: "null-loader",
//         });
//       }
//       return config;
//     },
//   }),
//   withSass,
// ];
// module.exports = withPlugins(plugins, nextConfig);
