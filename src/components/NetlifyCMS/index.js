import React from 'react';
import CMS from './cms';
import config from './config.json';
import FileSystemBackend from 'netlify-cms-backend-fs';

const NetlifyCMS = () => {
  React.useEffect(() => {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, )
    if (process.env.NODE_ENV === 'development') {
      config.load_config_file = false
      config.backend = {
        "name": "file-system",
        "api_root": "http://localhost:3000/api"
      }
      CMS.registerBackend('file-system', FileSystemBackend);
    }
    CMS.init({config})
  })

  return <div id="nc-root" />
};

export default NetlifyCMS;
