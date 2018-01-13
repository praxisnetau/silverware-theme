/* Webpack Server Configuration
===================================================================================================================== */

// Load Core:

const fs      = require('fs');
const webpack = require('webpack');

// Load Server:

const WebpackDevServer = require('webpack-dev-server');

// Load Config:

const config = require('./webpack.config.js')();

// Define Server:

const SERVER = {
  HOST: 'localhost',
  PORT: 8080,
  HTTPS: false
};

// Define Server Protocol:

const SERVER_PROTOCOL = SERVER.HTTPS ? 'https' : 'http';

// Define Server URL:

const SERVER_URL = `${SERVER_PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}`;

// Define Options:

const options = {
  hot: true,
  host: SERVER.HOST,
  port: SERVER.PORT,
  https: SERVER.HTTPS,
  stats: {
    colors: true
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  publicPath: `${SERVER_URL}/production`
};

// Override Output Public Path:

config.output.publicPath = options.publicPath;

// Add Entrypoints:

WebpackDevServer.addDevServerEntrypoints(config, options);

// Create Compiler Instance:

const compiler = webpack(config);

// Create Server Instance:

const server = new WebpackDevServer(compiler, options);

// Begin Listening:

server.listen(port = SERVER.PORT, host = SERVER.HOST, (error) => {
  if (error) return console.log(error);
  console.log(`Development server listening on ${SERVER_URL}...`);
});
