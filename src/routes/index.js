/* eslint-disable global-require */
import React from 'react';
import Layout from '../components/Layout';
import Media from '../../server/Media/Media';
// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '',
      load: () => import(/* webpackMode: 'eager' */ './home'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/test',
      load: () => import(/* webpackChunkName: 'admin' */ './test'),
    },
    {
      path: '/add-content/:path',
      action({ params }) {
        let loc = decodeURI(params.path);
        console.log(loc);
        Media(loc);
        // I have to figure out some way to make the call to run the function, and be able to get info even when it's only running on the server.
        // How I'll do this is websockets/socket.io/pusher. Basically I make that connection and I can send data between the client and server.
        // Media(loc).then(console.log("Done 2!"));


      //   async function getIt(loc) {
      //     await new Promise(
      //       (resolve, reject) => {
  
      //         if (!process.env.BROWSER) {
      //           Media(loc).then(() => {
      //             resolve();
      //           })
      //       }
      //   })
      // }

        return {
          title: 'Adding Media',
          component: (
            <Layout></Layout>
          ),
        };
      }
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
