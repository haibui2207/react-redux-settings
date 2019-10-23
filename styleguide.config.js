const path = require('path');
const { version } = require('./package');

// https://github.com/styleguidist/react-styleguidist/blob/master/docs/Configuration.md
module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  ignore: ['**/styles.js'],
  getComponentPathLine(componentPath) {
    const secs = path.dirname(componentPath).split(path.sep);
    const name = path
      .dirname(componentPath)
      .split(path.sep)
      .pop();

    return `import ${name} from '.${secs.join('/').replace('src', '')}';`;
  },
  template: {
    head: {
      scripts: [
        {
          src: 'https://kit.fontawesome.com/3c95fb739c.js',
          async: true,
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        },
      ],
    },
  },
  skipComponentsWithoutExample: true,
  usageMode: 'collapse',
  version,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
};
