module.exports = api => {
  const isTest = api.env("test");
  if (isTest) {
    return {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ]
    };
  } else {
    return {
      presets: [
        [
          "@babel/env",
          {
            debug: false,
            targets: {
              esmodules: false
            },
            
          }
        ]
      ],
      plugins: [
        // "@babel/plugin-external-helpers"
      ]
    };
  }
};
