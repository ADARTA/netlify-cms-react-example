# netlify-cms-react-example

## Process to create this example

Create the react app using `create-react-app`

```bash
$ npx create-react-app netlify-cms-react-example
$ cd netlify-cms-react-example 
```

Add dependencies for NetlifyCMS

```bash
$ yarn add netlify-cms
```

Create the the development proxy for the backend api

```bash
$ yarn add netlify-cms-backend-fs --dev
```

`src/setupProxy.js` is recognized by the webpack [setup in react-scripts][2], so we use the middleware script from `netlify-cms-backend-fs` to create the `/api` endpoint.

> Note: this feature is available with react-scripts@2.0.0 and higher.

`src/setupProxy.js`
```js
    const fsExpressAPI = require('netlify-cms-backend-fs/dist/fs');

    module.exports = fsExpressAPI;
```

Test the API endpoint by starting the development server using `npm run start` or `yarn start`. The proxy api will give you a message telling you the root and site path in the terminal. Browsing to `http://localhost:3000/api` will confirm the API is up and running by returning a json error object letting you know it is the root of the api.

### Creating your custom CMS application

This starter can be the beginning custom CMS or we can use this as a test for an existing NetlifyCMS configuration. Just clone the repository or download.

```bash
$ yarn install
$ yarn start
```

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[2]: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
