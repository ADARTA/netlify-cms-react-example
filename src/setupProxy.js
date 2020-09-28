// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
const {
  registerLocalFs,
} = require("netlify-cms-proxy-server/dist/middlewares");

module.exports = function (app) {
  registerLocalFs(app);
};
