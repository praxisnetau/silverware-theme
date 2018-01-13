/* Webpack Configuration
===================================================================================================================== */

// Load Core:

const path    = require('path');
const webpack = require('webpack');

// Load Plugins:

const CleanPlugin       = require('clean-webpack-plugin');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Define Base:

const BASE = '/themes/silverware-theme';

// Define Paths:

const PATHS = {
  SRC: path.resolve(__dirname, 'source'),
  DIST: path.resolve(__dirname, 'production'),
  MODULES: path.resolve(__dirname, 'node_modules'),
  COMBINED: path.resolve(process.env.PWD, '../../assets/_combinedfiles'),
  PUBLIC: BASE + '/production/'
};

// Define Config:

const CONFIG = {
  entry: {
    'bundle': 'bundles/bundle.js',
    'editor': 'bundles/editor.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper', 'default'],
      Modernizr: 'modernizr',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      ScrollSpy: 'exports-loader?ScrollSpy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ],
  resolve: {
    alias: {
      'bootstrap$': path.resolve(PATHS.MODULES, 'bootstrap-loader'),
      'combined-css$': path.resolve(PATHS.COMBINED, 'combined.css'),
      'combined-js$': path.resolve(PATHS.COMBINED, 'combined.js'),
      'font-awesome$': path.resolve(PATHS.MODULES, 'font-awesome/scss/font-awesome.scss'),
      'jquery$': path.resolve(PATHS.MODULES, 'jquery/src/jquery'),
      'modernizr$': path.resolve(__dirname, '.modernizrrc'),
      'popper$': path.resolve(PATHS.MODULES, 'popper.js')
    }
  }
};

// Define Entry:

const entry = (env, config, combine) => {
  
  // Obtain Entry:
  
  let entry = config.entry;
  
  // Merge Combined Files:
  
  if (combine) {
    
    console.log('Merging combined files...');
    
    entry.bundle = [
      entry.bundle,
      'combined-css',
      'combined-js'
    ];
    
  }
  
  // Answer Entry:
  
  return entry;
  
};

// Define Rules:

const rules = (env) => {
  
  // Answer Rules:
  
  return [
    {
      test: /\.js$/,
      use: script(env, [
        {
          loader: 'babel-loader'
        }
      ]),
      exclude: [
        PATHS.MODULES
      ]
    },
    {
      test: /\.css$/,
      use: style(env)
    },
    {
      test: /\.scss$/,
      use: style(env, [
        {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ])
    },
    {
      test: /\.(gif|jpg|png)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]',
            limit: 10000
          }
        }
      ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'svg/[name].[ext]'
          }
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeTitle: true },
              { convertColors: { shorthex: false } },
              { convertPathData: true }
            ]
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    },
    {
      test: /\.modernizrrc$/,
      use: [
        {
          loader: 'modernizr-loader'
        },
        {
          loader: 'json-loader'
        },
        {
          loader: 'yaml-loader'
        }
      ]
    }
  ];
  
};

// Define Script Loader:

const script = (env, loaders) => {
  return (env === 'production') ? loaders : loaders.concat({ loader: 'webpack-module-hot-accept' });
};

// Define Style Loaders:

const style = (env, extra = []) => {
  
  // Common Loaders:
  
  let loaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.resolve(__dirname, 'postcss.config.js')
        },
        sourceMap: true
      }
    }
  ];
  
  // Merge Loaders:
  
  loaders = [...loaders, ...extra];
  
  // Answer Loaders:
  
  return (env === 'production') ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: loaders
  }) : [{ loader: 'style-loader' }].concat(loaders);
  
};

// Define Devtool:

const devtool = (env) => {
  return (env === 'production') ? false : 'source-map';
};

// Define Plugins:

const plugins = (env, config) => {
  
  // Common Plugins:
  
  let plugins = [];
  
  // Merge Plugins:
  
  if (config.plugins) {
    plugins = [...plugins, ...config.plugins];
  }
  
  // Answer Plugins:
  
  return plugins.concat(
    (env === 'production') ? [
      new CleanPlugin(
        [ PATHS.DIST ]
      ),
      new ExtractTextPlugin({
        filename: 'styles/[name].css',
        allChunks: true
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ] : [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  );
  
};

// Define Resolve:

const resolve = (env, config) => {
  
  let resolve = {
    modules: [
      PATHS.SRC,
      PATHS.MODULES
    ]
  };
  
  if (config.resolve) {
    Object.assign(resolve, config.resolve);
  }
  
  return resolve;
  
};

// Define Externals:

const externals = (env, config) => {
  
  let externals = {};
  
  if (config.externals) {
    Object.assign(externals, config.externals);
  }
  
  return externals;
  
};

// Define Configuration:

const config = (env, config, combine) => {
  return {
    entry: entry(env, config, combine),
    output: {
      path: PATHS.DIST,
      filename: 'js/[name].js',
      publicPath: PATHS.PUBLIC
    },
    module: {
      rules: rules(env)
    },
    devtool: devtool(env),
    plugins: plugins(env, config),
    resolve: resolve(env, config),
    externals: externals(env, config)
  };
};

// Define Module Exports:

module.exports = (env = {}) => {
  process.env.NODE_ENV = env.production ? 'production' : 'development';
  console.log(`Running in ${process.env.NODE_ENV} mode...`);
  return config(process.env.NODE_ENV, CONFIG, env.combine);
};
