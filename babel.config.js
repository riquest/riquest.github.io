module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["@babel/preset-react", "@babel/preset-typescript", "babel-preset-gatsby"],
    plugins: ["babel-plugin-styled-components"],
  };
};

//    "plugins": [
//     [
//         "react-intl-auto",
//         {
//             "moduleSourceName": "gatsby-plugin-react-intl"
//         }
//     ]
// ]
