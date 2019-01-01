import React, { Component } from 'react';
import './setup'
import CMS, { init } from 'netlify-cms';
import config from './config.json';

CMS.init = init;

class NetlifyCMS extends Component {
  componentDidMount () {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, )
    const { FileSystemBackend } = require('netlify-cms-backend-fs');
    if (process.env.NODE_ENV === 'development') {
      config.backend = {
        "name": "file-system",
        "api_root": "http://localhost:3000/api"
      }
      CMS.registerBackend('file-system', FileSystemBackend);
    }
    CMS.init({config});
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;
