import babel from "rollup-plugin-babel";


module.exports = {
  input: "build/es6/taipan.js",
  output: {
    name: "Taipan",
    file: "build/taipan.js",
    format: "es"
  },
  external: [],
  plugins: [
    babel({
      // exclude: "node_modules/**" // only transpile our source code
    })
  ]
};
