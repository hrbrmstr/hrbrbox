import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from '@rollup/plugin-json';
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    format: "umd",
    file: "dist/index.min.js",
    name: "hrbrbox",
  },
  plugins: [
    commonjs(), 
    noderesolve(), 
    babel({ babelHelpers: "bundled" }), 
		terser(), 
		json(),
  ],
};