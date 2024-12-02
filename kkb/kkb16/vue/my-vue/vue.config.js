const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares) => {
      middlewares.unshift({
        path: '/api/courses',
        target: 'http://localhost:8080',
        middleware: (req, res) => {

          res.send([
            { id: 1, name: 'course1' },
            { id: 2, name: 'course2' },
            { id: 3, name: 'course3' },
          ]);
          // setTimeout(() => {
          //   console.log('get courses');

          //   res.send([
          //     { id: 1, name: 'course1' },
          //     { id: 2, name: 'course2' },
          //     { id: 3, name: 'course3' },
          //   ]);
          // }, 2000);
        },
      });
      return middlewares;
    },
  },
});
