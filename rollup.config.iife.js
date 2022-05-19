// import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

module.exports = {
  input: "build/es6/taipan.js",
  output: {
    name: "Taipan",
    file: "build/taipan.iife.js",
    format: "iife"
  },
  external: [], // <-- suppresses the warning
  plugins: [
    // resolve(),
    // commonjs(),
    babel({
      // exclude: "node_modules/**" // only transpile our source code
    })
  ]
};
