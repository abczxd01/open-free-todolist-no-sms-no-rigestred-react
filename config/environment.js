const path = require('path');

module.exports = {
  paths: {
    source: path.resolve(__dirname, '../src/'),
    output: path.resolve(__dirname, '../dist/'),
    public: path.resolve(__dirname, '../public'),
    outputProd: path.resolve(__dirname, '../server/static'),
  },
  server: {
    host: 'localhost',
    port: 8000,
  },
  limits: {
    images: 8192,
    fonts: 8192,
  },
  analyze:false,
};
