[![Netlify Status](https://api.netlify.com/api/v1/badges/8f305679-24cf-4136-a478-413411e78778/deploy-status)](https://app.netlify.com/sites/netlify-cms-react-example/deploys)

# netlify-cms-react-example

[![Edit netlify-cms-app Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k95z2k616r?fontsize=14)

## Process to create this example

Create the react app using `create-react-app`

```bash
$ git clone https://github.com/ADARTA/netlify-cms-react-example.git
$ cd netlify-cms-react-example
```

```bash
$ yarn start
```

### Create the the development proxy for the backend api

```bash
$ yarn add netlify-cms-proxy-server --dev
```

`src/setupProxy.js` is recognized by the webpack [setup in react-scripts][2], so we use the middleware script from `netlify-cms-proxy-server/dist/middlewares/registerLocalFs` to create the `/api/v1` endpoint.

> Note: this feature is available with react-scripts@2.0.0 and higher.

`src/setupProxy.js`

```js
const {
  registerLocalFs,
} = require("netlify-cms-proxy-server/dist/middlewares");

module.exports = function (app) {
  registerLocalFs(app);
};
```

Test the API endpoint by starting the development server using `npm run start` or `yarn start`. The proxy api will give you a message telling you the root and site path in the terminal. Browsing to `http://localhost:3000/api/v1` will confirm the API is up and running by returning a json error object letting you know it is the root of the api.

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
