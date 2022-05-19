import resolve from "@rollup/plugin-node-resolve";

module.exports = {
  input: "build/es6/taipan.js",
  output: {
    name: "Taipan",
    file: "build/taipan.cjs.js",
    format: "cjs"
  },
  external: [
  ],
  plugins: [
    resolve(),
    // babel({ 
    //   // babelHelpers: 'bundled',
    //   babelrc: false,
		//   presets: [
    //     ["@babel/env", 
    //       { 
    //         // modules: false,
    //         targets: {
    //           node: "current"
    //         }
    //       }
    //     ]
    //   ]
  
    // })
  ]
};