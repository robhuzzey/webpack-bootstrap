'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.js');

var minifyReact = new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }); // This has effect on the react lib size
var dedupePlugin = new webpack.optimize.DedupePlugin();
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    properties: true,
    sequences: true,
    dead_code: true,
    conditionals: true,
    comparisons: true,
    evaluate: true,
    booleans: true,
    unused: true,
    loops: true,
    hoist_funs: true,
    cascade: true,
    if_return: true,
    join_vars: true,
    drop_debugger: true,
    unsafe: true,
    hoist_vars: true,
    negate_iife: true
  },
  sourceMap: false,
  mangle: {
    toplevel: false,
    sort: false,
    eval: false,
    properties: false
  },
  output: {
    space_colon: false,
    comments: false
  }
});

config.plugins.unshift(minifyReact, dedupePlugin, uglifyPlugin);

module.exports = config;