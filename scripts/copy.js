// const path = require('path');
const fs      = require('fs');

const mail    = 'https://github.com/LCluber/Taipan.js';
const CRLF    = '\r\n';
const rel     = './';
const src     = `${rel}build/`;
const dest    = `${rel}dist/`; 
const files   = [
  {
    src:  `${rel}build/es6/taipan.d.ts`,
    dest: `${dest}taipan.d.ts`
  },
  {
    src:  `${src}taipan.iife.js`,
    dest: `${dest}taipan.iife.js`
  },
  {
    src:  `${src}taipan.iife.min.js`,
    dest: `${dest}taipan.iife.min.js`
  },
  {
    src:  `${src}taipan.cjs.js`,
    dest: `${dest}taipan.cjs.js`
  },
  {
    src:  `${src}taipan.js`,
    dest: `${dest}taipan.js`
  },
];

fs.mkdir(dest, { recursive: false },(err) => {
  if (err) throw err;
  fs.readFile(`${rel}LICENSE`, (err, license) => {
    if (err) throw err;
    for (let file of files) {
      fs.readFile(file.src, (err, fileContent) => {
        if (err) throw err;
        fs.writeFile(file.dest, `/*${CRLF}${license}${CRLF}${mail}${CRLF}*/${CRLF}${CRLF}${fileContent}`, (err) => {
          if (err) throw err;
        });
      });
    }
  });
});